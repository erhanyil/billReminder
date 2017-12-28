<?php 

class Database { 

	var $data;
	var $outp = "";

	function Database($response) { $this->data = $response; }

	function returnValue($returnValue,$toJson = false) {
		$returnValue ='{"response":['.$returnValue.']}';
		header("Access-Control-Allow-Origin: *");
		header("Content-Type: application/json; charset=UTF-8");
		if($toJson) $returnValue = json_encode($returnValue);
		echo($returnValue);
		$this->outp = "";
	}
   
    function getBills() {
		include "config.php";
		$sql="SELECT * FROM tblbills";
		$result = $conn->query($sql);
		while($rs = mysqli_fetch_array($result))
		{
			if ($this->outp != "") {$this->outp .= ",";}
			$this->outp .= '{"bill_data":"'.$rs["bill_data"].'"}';
		}
		$this->returnValue($this->outp);
		$conn->close();
    }

	function getBillsA() {
		include "config.php";
		$sql="SELECT * FROM tblbills";
		$result = $conn->query($sql);
		while($rs = mysqli_fetch_array($result))
		{
			if ($this->outp != "") {$this->outp .= ",";}
			$this->outp .= '{"bill_data":"'.$rs["bill_data"].'"}';
		}
		$this->returnValue($this->outp);
		$conn->close();
	}
}

?> 