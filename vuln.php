<?php

if ($_SERVER['REQUEST_METHOD'] == 'HEAD') {
    header("Content-Type: image/png");
    exit;
}

header("Location: https://adrianalvird.github.io/svg.svg");

?>
