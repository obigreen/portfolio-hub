<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$botToken = getenv('TELEGRAM_BOT_TOKEN');
$chatID   = getenv('TELEGRAM_CHAT_ID');

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) $data = $_POST;
if (!$data || !is_array($data)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'info' => 'Нет данных']);
    exit;
}

$currentDate = date('Y-m-d H:i:s');
$message  = "⚡ НОВАЯ ЗАЯВКА ⚡\n";
$message .= "Дата: $currentDate\n———————————\n";

foreach ($data as $key => $value) {
    $label = match ($key) {
        'name'      => 'Имя',
        'phone'     => 'Телефон',
        'fullname'  => 'ФИО',
        'city'      => 'Город',
        'telegram'  => 'Telegram',
        'age'       => 'Возраст',
        'schedule'  => 'График',
        'computer'  => 'Компьютер',
        'internet'  => 'Интернет',
        'os'        => 'Операционная система',
        'ram'       => 'Оперативная память',
        'lang'      => 'Язык',
        'sales'     => 'Опыт продаж',
        default     => ucfirst($key)
    };
    $message .= "$label: $value\n";
}

$url = "https://api.telegram.org/bot{$botToken}/sendMessage";
$postData = [
    'chat_id' => $chatID,
    'text'    => $message
];

$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($postData)
    ]
];
$context = stream_context_create($options);
$result  = file_get_contents($url, false, $context);

if ($result === false) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'info' => 'Ошибка при отправке в Telegram']);
} else {
    echo json_encode(['status' => 'ok']);
}
?>
