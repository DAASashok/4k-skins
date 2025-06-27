<?php
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$signature = base64_encode(hash_hmac('sha256', $json, 'ВАШ_TOKEN', true));
if ($_SERVER['HTTP_X_BODY_HASH'] !== $signature) {
  die("Неверная подпись!");
}

file_put_contents("skins/{$data['data']}.txt", "Skin purchased!");
?>
