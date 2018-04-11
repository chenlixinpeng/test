<?php
header("Content-type:application/json;charset=utf-8");
require_once("../init.php");
$sql="SELECT sm FROM dm_product_pic WHERE sm!=''";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
echo json_encode($result);
?>