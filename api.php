<?php
include "conf.php";
$api = $_GET['api'];

if($api == "loginAdmin"){
	$username = $_GET['username'];
	$password = md5($_GET['password']);
	$utente = $mysqli->query("SELECT * FROM admin WHERE username = '".$username."' AND password = '".$password."';");
	if($utente->num_rows){
		session_start();
		$result = mysqli_fetch_assoc($utente);
		$_SESSION['nomeUtente']=$result["username"];
		print $result["username"];
	}else{
		print "Errore";
	}
}

if($api =="loginUtente"){
	$username = $_GET['username'];
	$password = md5($_GET['password']);
	$utente = $mysqli->query("SELECT * FROM RappresentanteLista WHERE username = '".$username."' AND Password = '".$password."';");
	if($utente->num_rows){
		session_start();
		$result = mysqli_fetch_assoc($utente);
		$_SESSION['nomeUtente']=$result["username"];
		print $result["username"];
	}else{
		print "Errore";
	}
}

if($api == "controllo"){
	session_start();
	if(!(isset($_SESSION['nomeUtente']))|| $_SESSION['nomeUtente'] == "")
		print "Errore";
	else print $_SESSION['nomeUtente'];
}

?>

