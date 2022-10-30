<?php

$xVal = $_POST['x'];
$yVal = $_POST['y'];
$rVal = $_POST['r'];
$time = $_POST['time'];

function checkX($xVal)
{
    $arrayX = array(-3, -2, -1, 0, 1, 2, 3, 4, 5);

    if (!isset($xVal))
        return false;

    if (in_array($xVal, $arrayX)) {
        return true;
    } else {
        return false;
    }
}

function checkY($yVal)
{
    $Y_MIN = -5;
    $Y_MAX = 5;

    if (!isset($yVal))
        return false;

    $numY = str_replace(',', '.', $yVal);
    return is_numeric($numY) && $numY > $Y_MIN && $numY < $Y_MAX;
}


function checkR($rVal)
{
    $arrayR = array(1, 2, 3, 4, 5);

    if (!isset($rVal))
        return false;

    if (in_array($rVal, $arrayR)) {
        return true;
    } else {
        return false;
    }
}

function checkAll($xVal, $yVal, $rVal)
{
    return checkX($xVal) && checkY($yVal) && checkR($rVal);
}

function hitRectangle($xVal, $yVal, $rVal)
{
    return $xVal >= -$rVal / 2 && $xVal <= 0 && $yVal <= $rVal && $yVal >= 0;
}

function hitTriangle($xVal, $yVal, $rVal)
{
    return $xVal >= 0 && $yVal >= 0 && $yVal <= $rVal / 2 + $xVal;
}

function hitCircle($xVal, $yVal, $rVal)
{
    return $xVal <= 0 && $yVal <= 0 && sqrt($xVal * $xVal + $yVal * $yVal) <= $rVal;
}

function isHit($xVal, $yVal, $rVal)
{
    return hitRectangle($xVal, $yVal, $rVal) || hitTriangle($xVal, $yVal, $rVal) || hitCircle($xVal, $yVal, $rVal);
}

$isValid = checkAll($xVal, $yVal, $rVal);
$isValidString = $isValid ? 'true' : 'false';
$isHit = isHit($xVal, $yVal, $rVal);
$isHitString = $isHit ? 'true' : 'false';

$currentTime = date('H:i:s', time() - $time * 60);
$execTime = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 7);

if (!$isValid) {
    $jsonData = '{' .
        "\"isValid\":\"$isValidString\"" .
        "}";
} else {
    $jsonData = '{' .
        "\"isValid\":\"$isValidString\"," .
        "\"x\":\"$xVal\"," .
        "\"y\":\"$yVal\"," .
        "\"r\":\"$rVal\"," .
        "\"currentTime\":\"$currentTime\"," .
        "\"execTime\":\"$execTime\"," .
        "\"result\":$isHitString" .
        "}";
}

echo $jsonData;
