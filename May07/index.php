<meta http-equiv="refresh" content="1">
<?php
    $first = 'Rojo'; 
    $last = 'Cobian';
    $b = 25; 
    $c = $a + $b;
    $d = 'black';
?>


<?php 
    $x = 5;
    function test($myVar)
    {
        echo "The value of x is " . $myVar;
    }
    test($x);

    function test2()
    {
        global $y;
        $y = 75;
        // echo $y;
    }
    test2();
    echo $y;
?>











<!--
<p>
    Hello 
    <?php 
    /*
        $txt = $first . ' '. $last; 
        print $txt;
    */
    ?>, Welcome to my page
</p>
-->

<p>
<!-- My car is <?php //print $d; ?> -->
</p>

<!-- <p>
    <?php 
    //Comment 
    /* 

    */

    // $x = 5; 
    // echo $x;
    ?>
</p> -->