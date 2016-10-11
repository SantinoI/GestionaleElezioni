<?php
include "conf.php";
$api = $_GET['api'];

if($api == "loginAdmin"){
	$username = $_GET['username'];
	$password = md5($_GET['password']);
	$utente = $mysqli->query("SELECT * FROM admin WHERE username = '".$username."' AND password = '".$password."';");
	if($utente->num_rows){
		$result = array();
		while($r = mysqli_fetch_assoc($utente))
			$result[]=$r;
		print json_encode($result);
	}else{
		echo "string";
	}
}

?>

