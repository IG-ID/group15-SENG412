<?php
require_once '../db.php';

// Fetch all employees
$query = "SELECT * FROM employees ORDER BY id";
$result = mysqli_query($conn, $query);
if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}
$employees = mysqli_fetch_all($result, MYSQLI_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payroll - Class Project</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="payroll.php" class="active">Payroll</a></li>
        </ul>
    </nav>

    <div class="container">
        <h1>Employee Payroll System</h1>

        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Hours Worked</th>
                    <th>Hourly Rate</th>
                    <th>Gross Pay</th>
                    <th>Deductions</th>
                    <th>Net Pay</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($employees as $emp): 
                    $grossPay = $emp['hours_worked'] * $emp['hourly_rate'];
                    $netPay = $grossPay - $emp['deduction'];
                ?>
                <tr>
                    <td><?php echo str_pad($emp['id'], 4, '0', STR_PAD_LEFT); ?></td>
                    <td><?php echo htmlspecialchars($emp['emp_name']); ?></td>
                    <td><?php echo $emp['hours_worked']; ?></td>
                    <td>₦<?php echo number_format($emp['hourly_rate'], 2); ?></td>
                    <td>₦<?php echo number_format($grossPay, 2); ?></td>
                    <td>₦<?php echo number_format($emp['deduction'], 2); ?></td>
                    <td><strong>₦<?php echo number_format($netPay, 2); ?></strong></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <footer>
        <p>&copy; <?php echo date('Y'); ?> Class Project-1</p>
    </footer>
</body>
</html>