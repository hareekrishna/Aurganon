<?PHP 
header('Content-type: application/json');
if(!defined("HOST"))
	define("HOST","localhost");
if(!define("USER"))
	define("USER","eyebrowraise");
if(!define("PASSWORD"))
	define("PASSWORD","shakemom");
if(!define("DATABASE"))
	define("DATABASE","agents");
$mysqli_agents=new mysqli(HOST,USER,PASSWORD,DATABASE);

if(($_POST['flag']=='agent_add') && $_POST['agent_name']){
	if($stmt=$mysqli_agents->prepare("INSERT INTO `agents`.`agents` (`agent_name`) values(?)")){
		$stmt->bind_param("s",$_POST['agent_name']);
		if($stmt->execute()) echo "updated";
	}}
if($_POST['flag']=='agent_list'){
	$json='[';
	$agent_list;
	if(($stmt=$mysqli_agents->prepare("select `agent_name` from `agents`")) && $stmt->execute()){
		$stmt->store_result();
		$stmt->bind_result($agent_list);
		while($stmt->fetch()){
			if($json!='['){
					$json.=',';
				} 
			$agent_list=json_encode(preg_replace('/[0-9]+/',' ', $agent_list));
			$json.='{"agents":'.$agent_list.'}';
			
			
			
		}
			$json.=']';
			echo $json;
	}
	
	
	}
?>