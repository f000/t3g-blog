#
# Table structure for table 'tx_blog_domain_model_tag'
#
CREATE TABLE tx_blog_domain_model_tag (
  uid int(11) NOT NULL auto_increment,
  pid int(11) DEFAULT '0' NOT NULL,
  tstamp int(11) DEFAULT '0' NOT NULL,
  crdate int(11) DEFAULT '0' NOT NULL,
  cruser_id int(11) DEFAULT '0' NOT NULL,
  sorting int(11) DEFAULT '0' NOT NULL,
  deleted tinyint(4) DEFAULT '0' NOT NULL,
  hidden tinyint(4) DEFAULT '0' NOT NULL,
  t3ver_oid int(11) DEFAULT '0' NOT NULL,
  t3ver_id int(11) DEFAULT '0' NOT NULL,
  t3_origuid int(11) DEFAULT '0' NOT NULL,
  t3ver_wsid int(11) DEFAULT '0' NOT NULL,
  t3ver_label varchar(30) DEFAULT '' NOT NULL,
  t3ver_state tinyint(4) DEFAULT '0' NOT NULL,
  t3ver_stage tinyint(4) DEFAULT '0' NOT NULL,
  t3ver_count int(11) DEFAULT '0' NOT NULL,
  t3ver_tstamp int(11) DEFAULT '0' NOT NULL,
  t3ver_move_id int(11) DEFAULT '0' NOT NULL,
  title tinytext,
  description text,
  content text,

  PRIMARY KEY (uid),
  KEY parent (pid)
);

#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
  tx_blog_tag_content int(11) DEFAULT '0' NOT NULL,
);