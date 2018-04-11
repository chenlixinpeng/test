<?php
header("Content-Type:application/json");
require_once("../init.php");
@$kw=$_REQUEST["kw"];
$sql="SELECT sm,title,detail,showTime,city,venues,price FROM dm_product_pic INNER JOIN dm_product ON dm_product_pic.pid=dm_product.pid WHERE sm!='' AND  ";
if($kw){
  //$kw:"mac 256g i7"
  $kws=explode(" ",$kw);//$kw.split(" ")
  //$kws=["mac","256g","i7"]
  for($i=0;$i<count($kws);$i++){
    $kws[$i]=" classify like '%$kws[$i]%' ";
  }
  //$kws=[
    //" title like '%mac%' ",
    //" title like '%256g%' ",
    //" title like '%i7%' "
  //];
  $where=   //$kws.join(" and ")
    implode(" and ",$kws);
  //$where=" where title like '%mac%' and title like '%256g%' and title like '%i7%' ";
  $sql.=$where;
}
$pageSize=5;
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
$count=count($rows);
@$pno=$_REQUEST["pno"];
if(!$pno) $pno=1;
$sql.=" limit ".($pno-1)*$pageSize.",$pageSize";
$output=[
  "pageSize"=>$pageSize,
  "count"=>$count,
  "pageCount"=>ceil($count/$pageSize),
  "pno"=>$pno,
  "data"=>
    mysqli_fetch_All(mysqli_query($conn,$sql),1)
];
echo json_encode($output);
