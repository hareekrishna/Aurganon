<?PHP
if(isset($_POST['name'] , $_POST['college'] ,$_POST['email'] , $_POST['mobile'])){
	$body='clg-'.$_POST['college'].$_POST['email'].$_POST['mobile'];
	$body=wordwrap($body);
	if(mail("balaandmani18@gmail.com",$_POST['name'].'---balaaa..u got some work',$body)){
		echo 'submited';
		}
	}
?>