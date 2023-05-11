<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	function get_data() {
		$datae = array();
		$datae[] = array(
			'Email' => $_POST['email'],
		);
		return json_encode($datae);
	}
	$name = "email";
	$file_name = $name . '.json';

	if (file_put_contents(
		"$file_name", get_dta())) {
			echo $file_name . ' file created';
		}
		else {
			echo 'There is some error';
		}
}
?>
