<?php

$field_first_name = $_POST['names'];

$field_email = $_POST['email'];

$field_message = $_POST['message'];

$mail_to = 'emailaddress@test.com';

$subject = 'Message from a site visitor '.$field_first_name;

$body_message = 'From: '.$field_first_name."\n";

$body_message .= 'E-mail: '.$field_email."\n";

$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";

$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);


if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        window.location = 'index.html';
    </script>
<?php
}
else { ?>
    <script language="javascript" type="text/javascript">
        window.location = 'index.html';
    </script>
<?php
}
?>