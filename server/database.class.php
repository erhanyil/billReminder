<?php 


class Database { 

	var $data;
	var $temp_response = array();

	function Database($response) { $this->data = $response; }

	function returnValue($returnValue) {
		$this->temp_response = array();
		header("Access-Control-Allow-Origin: *");
		header("Content-Type: application/json; charset=UTF-8");
		$returnValue = json_encode($returnValue,JSON_NUMERIC_CHECK);
		echo($returnValue);
	}
   
    function getBills() {
		include "config.php";
		$sql="SELECT * FROM tblbills";
		if(isset($this->data->reminder_ID))	$sql = $sql." WHERE reminder_ID=".$this->data->reminder_ID;
		$result = $conn->query($sql);
		while($rs = mysqli_fetch_assoc($result)){
	        $this->temp_response[] = $rs;
		}

		$this->returnValue($this->temp_response);
		$conn->close();
    }

	function newReminder() {
		include "config.php";
		$sql = "INSERT INTO tblbills (user_ID, bill_type, bill_data, bill_amount, bill_message, insert_date, status, isActive) 
				VALUES 
				(1,
				 ".$this->data->bill_type.",
				 '".$this->data->bill_data."',
				 ".$this->data->bill_amount.",
				 '".$this->data->bill_message."',
				 '".date("Y-m-d h:i:s")."',
				 ".$this->data->status.",
				 1)";

		$this->returnValue($conn->query($sql) == TRUE ? "0" : "1");
		$conn->close();
	}

	function deleteReminder() {
		include "config.php";
		$sql = "DELETE FROM tblbills 
		WHERE reminder_ID=".$this->data->reminder_ID;

		$this->returnValue($conn->query($sql) == TRUE ? "0" : "1");
		$conn->close();
	}

	function updateReminder() {
		include "config.php";
		$sql = "UPDATE tblbills SET 
		reminder_ID=[value-1],
		user_ID=[value-2],
		bill_type=[value-3], 
		bill_data=[value-4],
		bill_amount=[value-5],
		bill_message=[value-6],
		insert_date=[value-7],
		status=[value-8],
		isActive=[value-9]
		 WHERE reminder_ID=".$this->data->reminder_ID;

		$this->returnValue($conn->query($sql) == TRUE ? "0" : "1");
		$conn->close();
	}

}

?> 