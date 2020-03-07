-- Adminer 4.7.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL DEFAULT '1',
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `admin` (`id`, `full_name`, `username`, `email`, `password`, `role_id`, `status`, `created_at`, `updated_at`) VALUES
(1,	'Rajasekhar Gudapati',	'Rajasekhar Gudapati',	'rajasekhargudapati@gmail.com',	'123456',	'1',	1,	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)',	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)'),
(2,	'Chandra Sekhar',	'Chandra Sekhar',	'chandrasekhar@gmail.com',	'123456',	'2',	1,	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)',	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)'),
(3,	'Sujatha Swaminathan',	'Sujatha Swaminathan',	'sujathaswaminathan@gmail.com',	'123456',	'3',	1,	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)',	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)'),
(6,	'GV Rao',	'GV Rao',	'gvrao@gmail.com',	'123456',	'4',	1,	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)',	'1566415170556'),
(7,	'Invoice admin',	'Invoice admin',	'invoiceadmin@gmail.com',	'123456',	'5',	1,	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)',	'Sat Aug 03 2019 11:36:34 GMT+0000 (UTC)'),
(20,	'username',	'',	'email@email.com',	'password',	'1',	1,	'Tue Aug 27 2019 16:40:53 GMT+0000 (UTC)',	'Tue Aug 27 2019 16:40:53 GMT+0000 (UTC)'),
(21,	'admin@admin.com',	'',	'gmail@gmail.com',	'gmail.com',	'2',	1,	'Wed Aug 28 2019 19:51:33 GMT+0000 (UTC)',	'Wed Aug 28 2019 19:51:33 GMT+0000 (UTC)'),
(22,	'grg',	'',	'email12@email.com',	'987654321',	'3',	1,	'Wed Aug 28 2019 20:07:15 GMT+0000 (UTC)',	'Wed Aug 28 2019 20:07:15 GMT+0000 (UTC)'),
(23,	'admin@admin.com',	'',	'123email@email.com',	'123456',	'4',	1,	'Wed Aug 28 2019 20:11:01 GMT+0000 (UTC)',	'Wed Aug 28 2019 20:11:01 GMT+0000 (UTC)'),
(24,	'admin',	'',	'admin123@admin.com',	'123456789',	'1',	1,	'Thu Aug 29 2019 15:55:55 GMT+0000 (UTC)',	'Thu Aug 29 2019 15:55:55 GMT+0000 (UTC)'),
(25,	'role2',	'',	'email123456@email.com',	'email123',	'2',	1,	'Thu Aug 29 2019 16:10:32 GMT+0000 (UTC)',	'Thu Aug 29 2019 16:10:32 GMT+0000 (UTC)'),
(26,	'role3',	'',	'role3@rol.com',	'role123456',	'3',	1,	'Thu Aug 29 2019 16:13:11 GMT+0000 (UTC)',	'Thu Aug 29 2019 16:13:11 GMT+0000 (UTC)'),
(27,	'rolename4',	'',	'role4@role.com',	'role4',	'4',	1,	'Thu Aug 29 2019 16:21:54 GMT+0000 (UTC)',	'Thu Aug 29 2019 16:21:54 GMT+0000 (UTC)'),
(28,	'role5',	'',	'role5@role.com',	'role5',	'5',	1,	'Thu Aug 29 2019 17:34:28 GMT+0000 (UTC)',	'Thu Aug 29 2019 17:34:28 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `apply_leave`;
CREATE TABLE `apply_leave` (
  `apply_leave_id` varchar(255) NOT NULL,
  `from_date` varchar(255) NOT NULL,
  `to_date` varchar(255) NOT NULL,
  `leave_type_id` varchar(255) NOT NULL,
  `reason_for_leave` varchar(255) NOT NULL,
  `priest_id` int(11) NOT NULL,
  `number_of_days` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0.Pending,1.Approved',
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `apply_leave` (`apply_leave_id`, `from_date`, `to_date`, `leave_type_id`, `reason_for_leave`, `priest_id`, `number_of_days`, `status`, `created_at`, `updated_at`) VALUES
('dnhx4nmojyr54jtq',	'21-09-2019',	'25-09-2019',	'1',	'some problem',	2,	4,	0,	'Wed Jul 31 2019 11:01:54 GMT+0000 (UTC)',	'Wed Jul 31 2019 11:01:54 GMT+0000 (UTC)'),
('dnhx4btwjzhavk81',	'21-09-2019',	'25-09-2019',	'1',	'some problem',	2,	4,	0,	'Sun Aug 18 2019 18:24:53 GMT+0000 (UTC)',	'Sun Aug 18 2019 18:24:53 GMT+0000 (UTC)'),
('dnhx4btwjzhb3o9w',	'21-09-2019',	'25-09-2019',	'1',	'some problem',	2,	4,	0,	'Sun Aug 18 2019 18:31:11 GMT+0000 (UTC)',	'Sun Aug 18 2019 18:31:11 GMT+0000 (UTC)'),
('dnhx4btwjzhb4c7d',	'20-08-2019',	'20-08-2019',	'3',	'aaa',	1,	2,	0,	'Sun Aug 18 2019 18:31:42 GMT+0000 (UTC)',	'Sun Aug 18 2019 18:31:42 GMT+0000 (UTC)'),
('dnhx4mtejzjsdkcg',	'08-08-2019',	'07-08-2019',	'2',	'xzccxz',	1,	1,	0,	'Tue Aug 20 2019 12:10:19 GMT+0000 (UTC)',	'Tue Aug 20 2019 12:10:19 GMT+0000 (UTC)'),
('dnhx4ixgjzpn2gdo',	'24-08-2019',	'23-08-2019',	'2',	'aaa',	1,	25,	0,	'Sat Aug 24 2019 14:28:19 GMT+0000 (UTC)',	'Sat Aug 24 2019 14:28:19 GMT+0000 (UTC)'),
('dnhx4ef9jztybnd3',	'27-08-2019',	'26-08-2019',	'2',	'some issues',	1,	1,	0,	'Tue Aug 27 2019 14:54:29 GMT+0000 (UTC)',	'Tue Aug 27 2019 14:54:29 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `check_payable_to`;
CREATE TABLE `check_payable_to` (
  `check_payable_id` int(11) NOT NULL AUTO_INCREMENT,
  `check_payable_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`check_payable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `check_payable_to` (`check_payable_id`, `check_payable_name`, `status`) VALUES
(1,	'kalalaya',	1),
(2,	'Patel',	1),
(3,	'C Bear LLC',	1),
(4,	'Marburger farm Diary',	1),
(5,	'Jordan Banana Food Service',	1);

DROP TABLE IF EXISTS `cost_center`;
CREATE TABLE `cost_center` (
  `cost_center_id` int(11) NOT NULL AUTO_INCREMENT,
  `cost_center_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`cost_center_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `cost_center` (`cost_center_id`, `cost_center_name`, `status`) VALUES
(1,	'Operations 1000',	1),
(2,	'BOD Resolution',	1);

DROP TABLE IF EXISTS `cultural_program_payments`;
CREATE TABLE `cultural_program_payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `check_payable_to` varchar(255) NOT NULL,
  `committee` varchar(255) NOT NULL,
  `check_number` varchar(255) NOT NULL,
  `payment_mode_id` int(11) NOT NULL,
  `officer1_sign` varchar(255) NOT NULL,
  `officer2_sign` varchar(255) NOT NULL,
  `officer1_sign_date` varchar(255) NOT NULL,
  `officer2_sign_date` varchar(255) NOT NULL,
  `officer3_sign_date` varchar(255) NOT NULL,
  `date_payment_due` varchar(255) NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `date_of_mailing` varchar(255) NOT NULL,
  `code_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `grand_total` float NOT NULL,
  `particulars` text NOT NULL,
  `approval_ec_bod` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `code_id` (`code_id`),
  CONSTRAINT `cultural_program_payments_ibfk_1` FOREIGN KEY (`code_id`) REFERENCES `expense_committee_code` (`code_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `cultural_program_payments` (`id`, `check_payable_to`, `committee`, `check_number`, `payment_mode_id`, `officer1_sign`, `officer2_sign`, `officer1_sign_date`, `officer2_sign_date`, `officer3_sign_date`, `date_payment_due`, `invoice_no`, `date_of_mailing`, `code_id`, `amount`, `grand_total`, `particulars`, `approval_ec_bod`, `created_at`, `updated_at`) VALUES
(8,	'1',	'aaa',	'111',	2,	'Supervisor',	'Supervisor',	'06/08/2019',	'30/08/2019',	'29/08/2019',	'07/08/2019',	'1111',	'21/08/2019',	2,	111,	111,	'Sambhavana for the artiste',	'aaa',	'Thu Aug 22 2019 14:11:08 GMT+0000 (UTC)',	'Thu Aug 22 2019 14:11:08 GMT+0000 (UTC)'),
(9,	'1',	'SDSDF',	'5654',	1,	'Supervisor',	'Operation Manager',	'14/08/2019',	'23/08/2019',	'21/08/2019',	'14/08/2019',	'45',	'21/08/2019',	2,	2,	2,	'jfyfhn',	'JH',	'Sat Aug 24 2019 14:42:10 GMT+0000 (UTC)',	'Sat Aug 24 2019 14:42:10 GMT+0000 (UTC)'),
(10,	'1',	'BBA',	'121212',	2,	'Supervisor',	'Supervisor',	'20/08/2019',	'26/08/2019',	'27/08/2019',	'20/08/2019',	'121212',	'26/08/2019',	2,	122,	122,	'LABOUR',	'2333333',	'Tue Aug 27 2019 12:59:25 GMT+0000 (UTC)',	'Tue Aug 27 2019 12:59:25 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `days_of_week`;
CREATE TABLE `days_of_week` (
  `day_id` int(11) NOT NULL AUTO_INCREMENT,
  `day` varchar(255) NOT NULL,
  PRIMARY KEY (`day_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `days_of_week` (`day_id`, `day`) VALUES
(1,	'Sunday'),
(2,	'Monday'),
(3,	'Tuesday'),
(4,	'Wednesday'),
(5,	'Thursday'),
(6,	'Friday'),
(7,	'Saturday');

DROP TABLE IF EXISTS `deity_tbl`;
CREATE TABLE `deity_tbl` (
  `deity_id` int(11) NOT NULL AUTO_INCREMENT,
  `deity_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`deity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `deity_tbl` (`deity_id`, `deity_name`, `status`) VALUES
(1,	'Sri Venkateswara Moolavar',	1),
(2,	'Padmavathi',	1),
(3,	'Andal',	1);

DROP TABLE IF EXISTS `delivery_to`;
CREATE TABLE `delivery_to` (
  `delivery_id` int(11) NOT NULL AUTO_INCREMENT,
  `delivery_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`delivery_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `delivery_to` (`delivery_id`, `delivery_name`, `status`) VALUES
(1,	'Temple',	1),
(2,	'Vatsala Kitchen',	1);

DROP TABLE IF EXISTS `employee_tbl`;
CREATE TABLE `employee_tbl` (
  `id1` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(255) NOT NULL,
  `employee_id` varchar(255) NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `assignment_start` varchar(255) NOT NULL,
  `assignment_end` varchar(255) NOT NULL,
  `employee_type` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1.active,2.deactive,3.delete',
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id1`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `employee_tbl` (`id1`, `id`, `employee_id`, `employee_name`, `assignment_start`, `assignment_end`, `employee_type`, `role`, `group_id`, `status`, `created_at`, `updated_at`) VALUES
(1,	'dnhx4jxujyqtqy5l',	'1',	'Kavita sharma',	'02-08-2019',	'01-9-2019',	'service',	10,	100,	2,	'Wed Jul 31 2019 05:43:24 GMT+0000 (UTC)',	'Mon Aug 05 2019 13:22:19 GMT+0000 (UTC)'),
(2,	'dnhx4jxujyqwtqy5l',	'2',	'kavya sharma',	'02-08-2019',	'01-9-2019',	'service',	10,	100,	2,	'Wed Jul 31 2019 05:43:24 GMT+0000 (UTC)',	'Wed Jul 31 2019 05:58:27 GMT+0000 (UTC)'),
(3,	'dnhx4np7jyvtrwh5',	'1',	'Kavita',	'14-08-2019',	'23-08-2019',	'service',	10,	10033,	1,	'Sat Aug 03 2019 17:42:59 GMT+0000 (UTC)',	'Wed Aug 07 2019 16:32:30 GMT+0000 (UTC)'),
(6,	'dnhx48lvjyy4q95n',	'11',	'bbb',	'20-08-2019',	'20-08-2019',	'1_',	1,	11,	1,	'Mon Aug 05 2019 08:25:10 GMT+0000 (UTC)',	'Sun Aug 18 2019 18:56:18 GMT+0000 (UTC)'),
(7,	'dnhx4cs0jyynlc3b',	'ahg',	'ss',	'08-01-2019',	'21-08-2019',	'asd',	1,	3,	3,	'Mon Aug 05 2019 17:13:13 GMT+0000 (UTC)',	'Wed Aug 07 2019 16:36:13 GMT+0000 (UTC)'),
(8,	'dnhx4cs0jyyo623y',	'1',	'Kavita',	'02-08-2019',	'01-9-2019',	'service',	10,	100,	3,	'Mon Aug 05 2019 17:29:20 GMT+0000 (UTC)',	'Fri Aug 16 2019 11:30:52 GMT+0000 (UTC)'),
(9,	'dnhx41pxjzehz2rb',	'1',	'ss44',	'09-08-2019',	'Invalid date',	'dfsd',	1,	1,	2,	'Fri Aug 16 2019 19:20:16 GMT+0000 (UTC)',	'Fri Aug 16 2019 19:20:57 GMT+0000 (UTC)'),
(10,	'dnhx4btwjzhbp1ga',	'2',	'fgh',	'20-08-2019',	'19-08-2019',	'dfsd',	2,	2,	3,	'Sun Aug 18 2019 18:47:48 GMT+0000 (UTC)',	'Sun Aug 18 2019 18:56:46 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `employee_type`;
CREATE TABLE `employee_type` (
  `employee_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_type_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`employee_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `employee_type` (`employee_type_id`, `employee_type_name`, `status`) VALUES
(1,	'FT Priest',	1),
(2,	'Visting Priest',	1),
(3,	'FT Paricharka',	1),
(4,	'Visting Paricharka',	1),
(5,	'FT Office Staff - Group1',	1),
(6,	'FT Office Staff - Group2	',	1),
(7,	'PT Office Supervisor	',	1),
(8,	'PT Office Assistant	',	1),
(9,	'PT Office Stafff	',	1);

DROP TABLE IF EXISTS `expense_committee_code`;
CREATE TABLE `expense_committee_code` (
  `code_id` int(11) NOT NULL AUTO_INCREMENT,
  `code_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `expense_committee_code` (`code_id`, `code_name`, `status`) VALUES
(1,	'5270 Artists/0110 Cultural',	1),
(2,	'1321 Contact labor/1212 Cultural',	1);

DROP TABLE IF EXISTS `facility_booking`;
CREATE TABLE `facility_booking` (
  `facility_booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `priest_booking_id` varchar(255) NOT NULL,
  `facility_id` int(11) NOT NULL,
  `from_time` varchar(255) NOT NULL COMMENT 'like ->8:00 AM',
  `to_time` varchar(255) NOT NULL COMMENT 'like -> 2:00 PM',
  `date` varchar(255) NOT NULL,
  `facility_fee` float NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`facility_booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `facility_booking` (`facility_booking_id`, `priest_booking_id`, `facility_id`, `from_time`, `to_time`, `date`, `facility_fee`, `created_at`, `updated_at`) VALUES
(2,	'dnhx48c2jysg7gz5',	1,	'4:00 PM',	'8:00 PM',	'12-07-2019',	1300,	'Thu Aug 01 2019 08:59:52 GMT+0000 (UTC)',	'Thu Aug 01 2019 08:59:52 GMT+0000 (UTC)'),
(3,	'dnhx4ar0jyy6m435',	1,	'4:00 PM',	'8:00 PM',	'12-07-2019',	1300,	'Mon Aug 05 2019 09:17:56 GMT+0000 (UTC)',	'Mon Aug 05 2019 09:17:56 GMT+0000 (UTC)'),
(4,	'dnhx4n49jzmytrfr',	1,	'4:00 PM',	'8:00 PM',	'12-07-2019',	1300,	'Thu Aug 22 2019 17:34:10 GMT+0000 (UTC)',	'Thu Aug 22 2019 17:34:10 GMT+0000 (UTC)'),
(5,	'dnhx4bjijzp7aaov',	1,	'4:00 PM',	'8:00 PM',	'12-07-2019',	1300,	'Sat Aug 24 2019 07:06:31 GMT+0000 (UTC)',	'Sat Aug 24 2019 07:06:31 GMT+0000 (UTC)'),
(6,	'dnhx4bjijzpcu63u',	1,	'04:11 pm',	'05:11 pm',	'24-08-2019',	220,	'Sat Aug 24 2019 09:41:56 GMT+0000 (UTC)',	'Sat Aug 24 2019 09:41:56 GMT+0000 (UTC)'),
(7,	'dnhx4bjijzpe39kw',	2,	'03:46 pm',	'05:46 pm',	'17-08-2019',	300,	'Sat Aug 24 2019 10:17:00 GMT+0000 (UTC)',	'Sat Aug 24 2019 10:17:00 GMT+0000 (UTC)'),
(8,	'dnhx4bjijzpexx1m',	1,	'04:10 pm',	'06:10 pm',	'24-08-2019',	23,	'Sat Aug 24 2019 10:40:51 GMT+0000 (UTC)',	'Sat Aug 24 2019 10:40:51 GMT+0000 (UTC)'),
(9,	'dnhx4ef9jztujz6u',	1,	'06:38 pm',	'06:38 pm',	'27-08-2019',	1111,	'Tue Aug 27 2019 13:08:59 GMT+0000 (UTC)',	'Tue Aug 27 2019 13:08:59 GMT+0000 (UTC)'),
(10,	'dnhx4ef9jzty62e9',	2,	'08:20 pm',	'08:20 pm',	'27-08-2019',	1999,	'Tue Aug 27 2019 14:50:08 GMT+0000 (UTC)',	'Tue Aug 27 2019 14:50:08 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `facility_tbl`;
CREATE TABLE `facility_tbl` (
  `facility_id` int(11) NOT NULL AUTO_INCREMENT,
  `facilty_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`facility_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `facility_tbl` (`facility_id`, `facilty_name`, `status`) VALUES
(1,	'Dining Hall',	1),
(2,	'Auditorium',	1),
(3,	'Multipurpose Hall',	1);

DROP TABLE IF EXISTS `frequent_user_tbl`;
CREATE TABLE `frequent_user_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `frequent_user_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `frequent_user_tbl` (`id`, `frequent_user_name`, `status`) VALUES
(1,	'Religious',	1),
(2,	'Kitchen',	1);

DROP TABLE IF EXISTS `invoice_details`;
CREATE TABLE `invoice_details` (
  `invoice_preist_id` varchar(255) NOT NULL,
  `invoice_amount` varchar(255) NOT NULL,
  `invoice_date` varchar(255) NOT NULL,
  `pos_referance` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `invoice_po_tbl`;
CREATE TABLE `invoice_po_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `po_no` varchar(255) NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `invoice_date` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `invoice_po_tbl` (`id`, `po_no`, `invoice_no`, `invoice_date`) VALUES
(5,	'123',	'123456',	'20/08/2019'),
(7,	'20190829001',	'1321213',	'08/29/2019'),
(8,	'20190829002',	'112',	'12/31/2019'),
(9,	'20190829004',	'123456789',	'08/29/2019'),
(10,	'20190829004',	'null',	'Invalid date');

DROP TABLE IF EXISTS `item_tbl`;
CREATE TABLE `item_tbl` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_description` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `isVerified` varchar(255) NOT NULL,
  `verified_date` varchar(255) NOT NULL,
  `verified_by` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `so_number` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `deity_id` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `item_tbl` (`item_id`, `item_description`, `weight`, `isVerified`, `verified_date`, `verified_by`, `comments`, `so_number`, `status`, `deity_id`) VALUES
(1,	'Beans Green Cut Marquis Frozen',	'950 grams',	'1',	'17/06/2019',	'Varadarajan Soriraja',	'',	'',	1,	1),
(2,	'Beans Lima Baby Frozen',	'950 grams',	'1',	'18/06/2019',	'Balaji Sambasivam',	'',	'',	1,	0);

DROP TABLE IF EXISTS `leave_rules_set_up`;
CREATE TABLE `leave_rules_set_up` (
  `leave_rules_set_up_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_type_id` int(11) NOT NULL,
  `sick` int(11) NOT NULL,
  `braverment` int(11) NOT NULL,
  `personal` int(11) NOT NULL,
  `track_time_off` int(11) NOT NULL DEFAULT '0' COMMENT '0.No,1.Yes',
  `additional` int(11) NOT NULL DEFAULT '0' COMMENT '0.No,1.Yes',
  `pto_cashable` int(11) NOT NULL DEFAULT '0' COMMENT '0.No,1.Yes',
  `pto_carry_over` int(11) NOT NULL DEFAULT '0' COMMENT '0.No,1.Yes',
  PRIMARY KEY (`leave_rules_set_up_id`),
  KEY `employee_type_id` (`employee_type_id`),
  CONSTRAINT `leave_rules_set_up_ibfk_1` FOREIGN KEY (`employee_type_id`) REFERENCES `employee_type` (`employee_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `leave_rules_set_up` (`leave_rules_set_up_id`, `employee_type_id`, `sick`, `braverment`, `personal`, `track_time_off`, `additional`, `pto_cashable`, `pto_carry_over`) VALUES
(1,	1,	3,	3,	3,	0,	0,	0,	0),
(2,	3,	3,	3,	3,	1,	1,	1,	1),
(3,	3,	3,	3,	3,	1,	0,	1,	0);

DROP TABLE IF EXISTS `leave_type`;
CREATE TABLE `leave_type` (
  `leave_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `leave_type_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`leave_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `leave_type` (`leave_type_id`, `leave_type_name`, `status`) VALUES
(1,	'PTO',	1),
(2,	'Sick',	1),
(3,	'Personal Day',	1),
(4,	'Breaverment',	1),
(5,	'Comp Off',	1);

DROP TABLE IF EXISTS `non_po_expenses`;
CREATE TABLE `non_po_expenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `non_po_invoice_id` varchar(255) NOT NULL,
  `code_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `particulars` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `non_po_expenses` (`id`, `non_po_invoice_id`, `code_id`, `amount`, `particulars`) VALUES
(3,	'dnhx4khxjzjmied4',	1,	600,	'machanics'),
(4,	'dnhx4khxjzjmied4',	1,	800,	'labour'),
(5,	'dnhx4necjzk5bbo8',	1,	2,	'dsd'),
(6,	'dnhx4necjzk6frle',	2,	2,	'fhfh'),
(7,	'dnhx4ixgjzpkkfze',	1,	2,	'labour'),
(8,	'dnhx4ixgjzpkkfze',	1,	3,	'particulars'),
(9,	'dnhx4ixgjzpl16ca',	1,	2,	'labours'),
(10,	'dnhx4ixgjzpl8tnj',	2,	2,	'dsvcxv'),
(11,	'dnhx4ixgjzpl8tnj',	2,	22,	'hgfg'),
(12,	'dnhx4ixgjzpl8tnj',	2,	2,	'cvxcvc'),
(13,	'dnhx4ixgjzpneceu',	1,	2,	'jfyfhn'),
(14,	'dnhx4ixgjzpneceu',	1,	2,	'jfyfhn');

DROP TABLE IF EXISTS `non_po_invoice`;
CREATE TABLE `non_po_invoice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `non_po_invoice_id` varchar(255) NOT NULL,
  `invoice_number` int(11) NOT NULL,
  `invoice_date` varchar(255) NOT NULL,
  `payment_to` int(11) NOT NULL,
  `payment_due_date` varchar(255) NOT NULL,
  `mode_of_payment` int(11) NOT NULL,
  `date_of_mailing` varchar(255) NOT NULL,
  `approval_ec_bod` varchar(255) NOT NULL,
  `cost_center` int(11) NOT NULL,
  `invoice_description` text NOT NULL,
  `total` float NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `non_po_invoice` (`id`, `non_po_invoice_id`, `invoice_number`, `invoice_date`, `payment_to`, `payment_due_date`, `mode_of_payment`, `date_of_mailing`, `approval_ec_bod`, `cost_center`, `invoice_description`, `total`, `created_at`, `updated_at`) VALUES
(3,	'dnhx4khxjzjmied4',	12331,	'03/06/2019',	1,	'19/06/2019',	1,	'10/06/2019',	'1',	1,	'dsadsfdsfdsfasdfds',	1400,	'Tue Aug 20 2019 09:26:06 GMT+0000 (UTC)',	'Tue Aug 20 2019 09:26:06 GMT+0000 (UTC)'),
(4,	'dnhx4kirjzjs9b4u',	111,	'2019-08-07T07:00:00.000Z',	2,	'2019-08-09T07:00:00.000Z',	2,	'2019-08-28T07:00:00.000Z',	'1111',	1,	'2fddggdggfd',	11,	'Tue Aug 20 2019 12:07:00 GMT+0000 (UTC)',	'Tue Aug 20 2019 12:07:00 GMT+0000 (UTC)'),
(5,	'dnhx4mt4jzjs9bue',	111,	'2019-08-07T07:00:00.000Z',	2,	'2019-08-09T07:00:00.000Z',	2,	'2019-08-28T07:00:00.000Z',	'1111',	1,	'2fddggdggfd',	11,	'Tue Aug 20 2019 12:07:01 GMT+0000 (UTC)',	'Tue Aug 20 2019 12:07:01 GMT+0000 (UTC)'),
(6,	'dnhx4necjzk5bbo8',	123654,	'01/08/2019',	1,	'29/08/2019',	1,	'28/08/2019',	'dsdsf',	1,	'sdsfsd',	2,	'Tue Aug 20 2019 18:12:29 GMT+0000 (UTC)',	'Tue Aug 20 2019 18:12:29 GMT+0000 (UTC)'),
(7,	'dnhx4necjzk6frle',	123654,	'14/08/2019',	1,	'21/08/2019',	1,	'21/08/2019',	'bvb',	1,	'bfgdh',	2,	'Tue Aug 20 2019 18:43:56 GMT+0000 (UTC)',	'Tue Aug 20 2019 18:43:56 GMT+0000 (UTC)'),
(8,	'dnhx4ixgjzpkkfze',	1236,	'12/08/2019',	1,	'08/08/2019',	1,	'05/08/2019',	'11323',	2,	'sdwfwef',	5,	'Sat Aug 24 2019 13:18:20 GMT+0000 (UTC)',	'Sat Aug 24 2019 13:18:20 GMT+0000 (UTC)'),
(9,	'dnhx4ixgjzpl16ca',	123456,	'24/08/2019',	2,	'21/08/2019',	1,	'22/08/2019',	'sfsd',	1,	'dsgvfd',	2,	'Sat Aug 24 2019 13:31:20 GMT+0000 (UTC)',	'Sat Aug 24 2019 13:31:20 GMT+0000 (UTC)'),
(10,	'dnhx4ixgjzpl8tnj',	3124,	'02/08/2019',	2,	'10/08/2019',	1,	'16/08/2019',	'ewrw',	1,	'wdsf',	26,	'Sat Aug 24 2019 13:37:17 GMT+0000 (UTC)',	'Sat Aug 24 2019 13:37:17 GMT+0000 (UTC)'),
(11,	'dnhx4ixgjzpneceu',	1236,	'22/08/2019',	3,	'15/08/2019',	1,	'23/08/2019',	'sfsd',	1,	'zzfsdf',	4,	'Sat Aug 24 2019 14:37:34 GMT+0000 (UTC)',	'Sat Aug 24 2019 14:37:34 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `order_item_tbl`;
CREATE TABLE `order_item_tbl` (
  `order_item_id` varchar(255) NOT NULL,
  `po_no` varchar(255) NOT NULL,
  `select_item_id` int(11) NOT NULL,
  `unit_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` float NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `order_item_tbl` (`order_item_id`, `po_no`, `select_item_id`, `unit_id`, `qty`, `price`, `amount`) VALUES
('dnhx4e1tjzwi3giw',	'20190829001',	1,	6,	1,	36,	36),
('dnhx4e1tjzwi3gix',	'20190829001',	3,	7,	1,	37.2422,	37.2422),
('dnhx4e1tjzwi3giy',	'20190829001',	3,	7,	2,	37.2422,	74.4844),
('dnhx4e1tjzwi3giz',	'20190829001',	4,	8,	1,	4.1633,	4.1633),
('dnhx4gmrjzwousyr',	'20190829002',	2,	13,	10,	42.1633,	421.633),
('dnhx4gmrjzwousys',	'20190829002',	1,	6,	50,	36,	1800),
('dnhx4gmrjzwvl7go',	'20190829002',	2,	13,	10,	42.1633,	421.633),
('dnhx4gmrjzwvl7gp',	'20190829002',	1,	6,	50,	36,	1800),
('dnhx4gmrjzwvrlxs',	'20190829004',	2,	9,	2,	2.46233,	4.92466),
('dnhx4gmrjzwvrlxt',	'20190829004',	3,	11,	2,	32,	64);

DROP TABLE IF EXISTS `payment_mode`;
CREATE TABLE `payment_mode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `payment_mode` (`id`, `payment_name`, `status`) VALUES
(1,	'Online',	1),
(2,	'Cheque',	1);

DROP TABLE IF EXISTS `positions_tbl`;
CREATE TABLE `positions_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `positions_tbl` (`id`, `position_name`, `status`) VALUES
(1,	'Supervisor',	1),
(2,	'Operation Manager',	1),
(3,	'Chairperson',	1),
(4,	'Officer',	1);

DROP TABLE IF EXISTS `po_status`;
CREATE TABLE `po_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `po_no` varchar(255) NOT NULL,
  `draft` int(11) NOT NULL DEFAULT '0',
  `submitted` int(11) NOT NULL DEFAULT '0',
  `approved_1_by` int(11) NOT NULL DEFAULT '0',
  `approved_2_by` int(11) NOT NULL DEFAULT '0',
  `to_vendor` int(11) NOT NULL DEFAULT '0',
  `good_received` int(11) NOT NULL DEFAULT '0',
  `complete_payment` int(11) NOT NULL DEFAULT '0',
  `approved_by_one_name` varchar(255) NOT NULL DEFAULT '" "',
  `approved_by_one_comment` varchar(255) NOT NULL DEFAULT '" "',
  `approved_by_two_name` varchar(255) NOT NULL DEFAULT '" "',
  `approved_by_two_comment` varchar(255) NOT NULL DEFAULT '" "',
  `last_updated_by` varchar(255) NOT NULL DEFAULT '" "',
  `last_updated_comment` varchar(255) NOT NULL DEFAULT '" "',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `po_status` (`id`, `po_no`, `draft`, `submitted`, `approved_1_by`, `approved_2_by`, `to_vendor`, `good_received`, `complete_payment`, `approved_by_one_name`, `approved_by_one_comment`, `approved_by_two_name`, `approved_by_two_comment`, `last_updated_by`, `last_updated_comment`) VALUES
(35,	'20190829001',	1,	1,	1,	1,	1,	1,	1,	'Chandra Sekhar',	'verified',	'undefined',	'undefined',	'balram',	'Good service'),
(36,	'20190829002',	1,	1,	1,	1,	1,	1,	1,	'Chandra Sekhar',	'ok',	'undefined',	'undefined',	'balram',	'Good service'),
(38,	'20190829004',	1,	1,	1,	1,	1,	1,	1,	'role2',	'approve 1',	'role3',	'approved 2',	'rolename4',	'received');

DROP TABLE IF EXISTS `price_tbl`;
CREATE TABLE `price_tbl` (
  `price_id` int(11) NOT NULL AUTO_INCREMENT,
  `price` float NOT NULL,
  `select_item_id` int(11) NOT NULL,
  `unit_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`price_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `price_tbl` (`price_id`, `price`, `select_item_id`, `unit_id`, `status`) VALUES
(1,	36,	1,	6,	1),
(2,	2.46233,	2,	9,	1),
(3,	37.2422,	3,	7,	1),
(4,	4.1633,	4,	8,	1),
(5,	3.552,	1,	10,	1),
(6,	24.6,	4,	11,	1),
(7,	3.2422,	3,	12,	1),
(8,	42.1633,	2,	13,	1);

DROP TABLE IF EXISTS `priest_booking`;
CREATE TABLE `priest_booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `priest_booking_id` varchar(255) NOT NULL,
  `puja_id` int(11) NOT NULL,
  `puja_type` int(11) NOT NULL,
  `priest_id` int(11) NOT NULL,
  `dateAndTime` varchar(255) NOT NULL,
  `priest_fee` float NOT NULL,
  `facility_type` int(11) NOT NULL DEFAULT '0' COMMENT '0.Non-facility,1.facility',
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `priest_booking` (`id`, `priest_booking_id`, `puja_id`, `puja_type`, `priest_id`, `dateAndTime`, `priest_fee`, `facility_type`, `created_at`, `updated_at`) VALUES
(1,	'dnhx48c2jysg7gz5',	1,	1,	1,	'12-07-2019 3:32 PM',	232,	1,	'Thu Aug 01 2019 08:59:52 GMT+0000 (UTC)',	'Thu Aug 01 2019 08:59:52 GMT+0000 (UTC)'),
(14,	'dnhx4ef9jztujz6u',	1,	0,	1,	'02-12-2019 12:00 am',	899,	1,	'Tue Aug 27 2019 13:08:59 GMT+0000 (UTC)',	'Tue Aug 27 2019 13:08:59 GMT+0000 (UTC)'),
(15,	'dnhx4ef9jzty4mvb',	1,	0,	1,	'20-08-2019 08:18 pm',	1000,	0,	'Tue Aug 27 2019 14:49:01 GMT+0000 (UTC)',	'Tue Aug 27 2019 14:49:01 GMT+0000 (UTC)'),
(16,	'dnhx4ef9jzty62e9',	1,	0,	2,	'27-08-2019 08:19 pm',	100,	1,	'Tue Aug 27 2019 14:50:08 GMT+0000 (UTC)',	'Tue Aug 27 2019 14:50:08 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `priest_reservation`;
CREATE TABLE `priest_reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_no` varchar(255) NOT NULL,
  `puja_id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `priest_reservation` (`id`, `first_name`, `last_name`, `address`, `email`, `mobile_no`, `puja_id`, `date`, `created_at`, `updated_at`) VALUES
(1,	'Prasad',	'sethi',	'hydrabad',	'prasadsethi@gmail.com',	'235936596',	1,	'03/03/2019',	'Mon Aug 19 2019 07:07:30 GMT+0000 (UTC)',	'Mon Aug 19 2019 07:07:30 GMT+0000 (UTC)'),
(2,	'first',	'last',	'address',	'email@email.com',	'9874563210',	1,	'15/08/2019',	'Wed Aug 21 2019 19:02:15 GMT+0000 (UTC)',	'Wed Aug 21 2019 19:02:15 GMT+0000 (UTC)'),
(3,	'hshvdfvdf',	'gfdgdfgfdg',	'cdgfcghn',	'email@email.com',	'9874563210',	1,	'15/08/2019',	'Wed Aug 21 2019 19:40:06 GMT+0000 (UTC)',	'Wed Aug 21 2019 19:40:06 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `priest_tbl`;
CREATE TABLE `priest_tbl` (
  `priest_id` int(11) NOT NULL AUTO_INCREMENT,
  `priest_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`priest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `priest_tbl` (`priest_id`, `priest_name`, `status`) VALUES
(1,	'Gopal Sharma',	1),
(2,	'Kamla Sharma',	1);

DROP TABLE IF EXISTS `puja_tbl`;
CREATE TABLE `puja_tbl` (
  `puja_id` int(11) NOT NULL AUTO_INCREMENT,
  `puja_name` varchar(255) NOT NULL,
  `puja_type` int(11) NOT NULL COMMENT '0.home,1.temple',
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`puja_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `puja_tbl` (`puja_id`, `puja_name`, `puja_type`, `status`) VALUES
(1,	'Griha Pravesh Puja',	0,	1),
(2,	'Satyanarayan Puja',	0,	1),
(3,	'Akhandramayan Path',	1,	1),
(4,	'Laxmi Puja',	1,	1);

DROP TABLE IF EXISTS `puja_type_table`;
CREATE TABLE `puja_type_table` (
  `puja_type` int(11) NOT NULL,
  `puja_type_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `puja_type_table` (`puja_type`, `puja_type_name`) VALUES
(0,	'puja_at_home'),
(1,	'puja_at_temple');

DROP TABLE IF EXISTS `purchase_order`;
CREATE TABLE `purchase_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `purchase_id` varchar(255) NOT NULL,
  `vendor_id` varchar(255) NOT NULL,
  `po_no` varchar(255) NOT NULL,
  `delivery_id` int(11) NOT NULL,
  `template_id` int(11) NOT NULL DEFAULT '0',
  `code_id` int(11) NOT NULL DEFAULT '0',
  `po_total` float NOT NULL,
  `grant_total` float NOT NULL DEFAULT '0',
  `date_order` varchar(255) NOT NULL,
  `date_recieved` varchar(255) NOT NULL,
  `prepared_by` varchar(255) NOT NULL DEFAULT '" "',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0.draft,1.submitted,2.approved,3.received ,4.paid',
  `pur_invoice_status` int(11) NOT NULL DEFAULT '0' COMMENT '0.processing,1.payment_reject,2.invoice_received,3.payment_completed',
  `created_date` varchar(255) NOT NULL,
  `updated_date` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `delivery_id` (`delivery_id`),
  CONSTRAINT `purchase_order_ibfk_1` FOREIGN KEY (`delivery_id`) REFERENCES `delivery_to` (`delivery_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `purchase_order` (`id`, `purchase_id`, `vendor_id`, `po_no`, `delivery_id`, `template_id`, `code_id`, `po_total`, `grant_total`, `date_order`, `date_recieved`, `prepared_by`, `status`, `pur_invoice_status`, `created_date`, `updated_date`) VALUES
(43,	'dnhx4e1tjzwi3gio',	'dnhx4c5ojysy1oro',	'20190829001',	1,	1,	1,	151.89,	1000,	'08/29/2019',	'08/29/2019',	'Rajasekhar Gudapati',	4,	0,	'Thu Aug 29 2019 09:43:31 GMT+0000 (UTC)',	'Thu Aug 29 2019 09:43:31 GMT+0000 (UTC)'),
(44,	'dnhx4gmrjzwousyh',	'dnhx4c5ojysy1oro',	'20190829002',	1,	1,	1,	2221.63,	1000,	'08/29/2019',	'29/08/2019',	'Rajasekhar Gudapati',	3,	0,	'Thu Aug 29 2019 12:52:45 GMT+0000 (UTC)',	'Thu Aug 29 2019 12:52:45 GMT+0000 (UTC)'),
(46,	'dnhx4gmrjzwvrlxg',	'dnhx4c5ojysy1oro',	'20190829004',	1,	1,	2,	68.9247,	79,	'08/29/2019',	'08/29/2019',	'admin',	4,	0,	'Thu Aug 29 2019 16:06:13 GMT+0000 (UTC)',	'Thu Aug 29 2019 16:06:13 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `purchase_order_tracker`;
CREATE TABLE `purchase_order_tracker` (
  `ordr_traker_id` varchar(255) NOT NULL,
  `vender_id` varchar(255) NOT NULL,
  `po_no` int(11) NOT NULL,
  `po_date` date NOT NULL,
  `delivery_date` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0.draft,1.received,2.submitted,3.approved,4.paid'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `recieved_order_tbl`;
CREATE TABLE `recieved_order_tbl` (
  `recieved_order_id` varchar(255) NOT NULL,
  `order_item_id` varchar(255) NOT NULL,
  `po_no` varchar(255) NOT NULL,
  `received_qty` int(11) NOT NULL,
  `final_price` int(11) NOT NULL,
  `check` int(11) NOT NULL DEFAULT '0' COMMENT '0.unchecked,1.checked',
  `action` int(11) NOT NULL DEFAULT '0' COMMENT '0.No,1.Yes'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `recieved_order_tbl` (`recieved_order_id`, `order_item_id`, `po_no`, `received_qty`, `final_price`, `check`, `action`) VALUES
('dnhx4g7tjzwlvya9',	'dnhx4e1tjzwi3giw',	'20190829001',	2,	1000,	1,	1),
('dnhx4g7tjzwlvyaa',	'dnhx4e1tjzwi3gix',	'20190829001',	1,	100,	1,	1),
('dnhx4g7tjzwlvyab',	'dnhx4e1tjzwi3giy',	'20190829001',	1,	10,	1,	1),
('dnhx4g7tjzwlvyab',	'dnhx4e1tjzwi3giz',	'20190829001',	1,	1,	1,	1),
('dnhx4gmrjzwxntyl',	'dnhx4gmrjzwvrlxs',	'20190829004',	2,	23,	1,	2),
('dnhx4gmrjzwxntym',	'dnhx4gmrjzwvrlxt',	'20190829004',	36,	63,	1,	2),
('dnhx4iuejzwxx9t7',	'dnhx4gmrjzwvrlxs',	'20190829004',	23,	36,	0,	2),
('dnhx4iuejzwxx9t8',	'dnhx4gmrjzwvrlxt',	'20190829004',	25,	5,	0,	2),
('dnhx4iuejzwxypj9',	'dnhx4gmrjzwvrlxs',	'20190829004',	23,	89,	0,	2),
('dnhx4iuejzwxypja',	'dnhx4gmrjzwvrlxt',	'20190829004',	6,	5,	0,	2),
('dnhx4j4kjzwy5wwt',	'dnhx4gmrjzwvrlxs',	'20190829004',	454,	62,	0,	2),
('dnhx4j4kjzwy5wwu',	'dnhx4gmrjzwvrlxt',	'20190829004',	9895,	456,	0,	2),
('dnhx4j77jzwy7pgq',	'dnhx4gmrjzwvrlxs',	'20190829004',	63,	989,	1,	2),
('dnhx4j77jzwy7pgr',	'dnhx4gmrjzwvrlxt',	'20190829004',	661,	6262,	0,	2),
('dnhx4j77jzwy94s9',	'dnhx4gmrjzwvrlxs',	'20190829004',	6,	151,	0,	2),
('dnhx4j77jzwy94sa',	'dnhx4gmrjzwvrlxt',	'20190829004',	456,	66,	1,	2),
('dnhx4j77jzwy9qmz',	'dnhx4iw2jzpjt8et',	'20190829002',	2,	1000,	1,	1),
('dnhx4j77jzwy9qn0',	'dnhx4iw2jzpjt8eu',	'20190829002',	1,	100,	1,	1),
('dnhx4j77jzwychsx',	'dnhx4gmrjzwvrlxs',	'20190829004',	2,	56,	1,	2),
('dnhx4j77jzwychsy',	'dnhx4gmrjzwvrlxt',	'20190829004',	3,	23,	1,	2);

DROP TABLE IF EXISTS `role_table`;
CREATE TABLE `role_table` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `role_table` (`role_id`, `role_name`, `status`) VALUES
(1,	'admin',	1),
(2,	'Aproved 1 By',	1),
(3,	'Aproved 2 By',	1),
(4,	'Good Recieved',	1),
(5,	'Accounted',	1),
(6,	'vendor',	1);

DROP TABLE IF EXISTS `select_item_tble`;
CREATE TABLE `select_item_tble` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) NOT NULL,
  `vendor_id` varchar(255) NOT NULL,
  `frequent_user` int(11) NOT NULL COMMENT '1.Religious,2.Kitchen',
  `Item Status` int(11) NOT NULL COMMENT '0.Special Occasion,1.Active,2.Regular',
  `template_id` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `select_item_tble` (`item_id`, `item_name`, `vendor_id`, `frequent_user`, `Item Status`, `template_id`) VALUES
(1,	'Beans Green Cut Marquis Frozen',	'dnhx4c5ojysy1oro',	1,	1,	1),
(2,	'Carrots Diced IQF Libbys',	'dnhx4c5ojysy1oro',	1,	1,	1),
(3,	'Carrots Sliced IQF Marquis',	'dnhx4c5ojysy1oro',	2,	1,	1),
(4,	'Peas Frozen Marquis',	'dnhx4c5ojysy1oro',	1,	2,	1);

DROP TABLE IF EXISTS `template_save_tbl`;
CREATE TABLE `template_save_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `template_id` int(11) NOT NULL,
  `po_no` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `template_save_tbl` (`id`, `template_id`, `po_no`) VALUES
(22,	1,	'20190829004');

DROP TABLE IF EXISTS `template_tbl`;
CREATE TABLE `template_tbl` (
  `template_id` int(11) NOT NULL AUTO_INCREMENT,
  `template_name` varchar(255) NOT NULL,
  `vendor_id` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`template_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `template_tbl` (`template_id`, `template_name`, `vendor_id`, `status`) VALUES
(1,	'Fruits and Vegetables Order',	'dnhx4c5ojysy1oro',	1),
(3,	'Fruits and Vegetables Order',	'dnhx4c5ojysy1or',	1);

DROP TABLE IF EXISTS `temple_schedule`;
CREATE TABLE `temple_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puja_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `reporting_time` varchar(255) NOT NULL,
  `day_id` int(11) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `temple_schedule` (`id`, `puja_name`, `description`, `price`, `reporting_time`, `day_id`, `created_at`, `updated_at`) VALUES
(1,	'Archana for Shri Venkatesawara',	'Archana are performed after Subrabhatam subject to other puja schedule.',	140,	'9 AM',	2,	'Tue Aug 20 2019 05:28:39 GMT+0000 (UTC)',	'Tue Aug 20 2019 05:28:39 GMT+0000 (UTC)'),
(2,	'Laxmi Puja',	'cvbvb',	12,	'2019-08-21T19:32:27.489Z',	4,	'Wed Aug 21 2019 19:32:36 GMT+0000 (UTC)',	'Wed Aug 21 2019 19:32:36 GMT+0000 (UTC)');

DROP TABLE IF EXISTS `unit_tbl`;
CREATE TABLE `unit_tbl` (
  `unit_id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `select_item_id` int(11) NOT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `unit_tbl` (`unit_id`, `unit_name`, `status`, `select_item_id`) VALUES
(6,	'Case',	1,	1),
(7,	'Case',	1,	3),
(8,	'Each',	1,	4),
(9,	'Case',	1,	2),
(10,	'Each',	1,	1),
(11,	'Each',	1,	3),
(12,	'Case',	1,	4),
(13,	'Each',	1,	2);

DROP TABLE IF EXISTS `vendor_tbl`;
CREATE TABLE `vendor_tbl` (
  `vendor_id` varchar(255) NOT NULL,
  `vendor_name` varchar(255) NOT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1.active,2.deactive,3.delete',
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `vendor_tbl` (`vendor_id`, `vendor_name`, `address_line1`, `address_line2`, `state`, `city`, `country`, `zip`, `status`, `created_at`, `updated_at`) VALUES
('dnhx4c5ojysy1oro',	'Jordan Banana food Service',	'203, Washington Avenue',	'PO Box 495, Dravosburg, PA 15034',	'Dravosburg',	'Washington',	'PA',	'15034',	1,	'Fri Aug 02 2019 06:53:09 GMT+0000 (UTC)',	'Fri Aug 16 2019 13:27:41 GMT+0000 (UTC)'),
('dnhx4hi9jytsb4kg',	'Turner Dairy Farms, INC.',	'1049, Jefferson Road',	'Bittsburgh, PA 15235',	'Bittsburgh',	'Bittsburgh',	'PA',	'1523536',	2,	'Fri Aug 02 2019 07:26:24 GMT+0000 (UTC)',	'Tue Aug 20 2019 12:08:23 GMT+0000 (UTC)'),
('dnhx43knjyx33i69',	'test',	'1506, Mars-Evans City Road',	'Evens City, PA 16033',	'Evens City',	'Evens City',	'PA_1',	'16033646464',	3,	'Sun Aug 04 2019 14:51:43 GMT+0000 (UTC)',	'Fri Aug 16 2019 18:24:14 GMT+0000 (UTC)'),
('dnhx4o7vjz1251sp',	'Fancy Florist',	'853 Niagara Falls Blvd',	'Amherst, NY 14226',	'Amherst',	'Amherst',	'NY',	'14226',	3,	'Wed Aug 07 2019 09:36:00 GMT+0000 (UTC)',	'Tue Aug 20 2019 12:08:30 GMT+0000 (UTC)'),
('dnhx4o7vjz1hrp3n',	'C Bear LLC',	'650-M Seco Road,',	'Monroeville, PA 15146',	'Monroeville',	'Monroeville',	'PA',	'15146',	3,	'Wed Aug 07 2019 16:53:31 GMT+0000 (UTC)',	'Fri Aug 16 2019 18:17:25 GMT+0000 (UTC)');

-- 2019-08-30 05:01:06
