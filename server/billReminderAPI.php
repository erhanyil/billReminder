<?php

include 'database.class.php';

$data = json_decode(file_get_contents("php://input"));

$KEY = $data[0]->key;

$request_method=$_SERVER["REQUEST_METHOD"];

$database = new Database($data[0]->data);

switch($request_method)
{
	case 'GET':
		echo json_encode($data);
		break;
	case 'POST':
		if ($KEY == 'getBills') $database->getBills();
		else if ($KEY == 'getBillsA') $database->getBillsA();
		break;
	case 'PUT':
		echo json_encode($data);
		break;
	case 'DELETE':
		echo json_encode($data);
		break;
	default:
		// Invalid Request Method
		header("HTTP/1.0 405 Method Not Allowed");
		break;
}

?>