using System;
using System.Net.Mail;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        int type, dest, time, result;
        public Form1()
        {
            InitializeComponent();
           // if (!comboBox2.Text.Equals(null))
           // {
                Submit.Enabled = false;
            //}
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox1.SelectedItem.Equals("Sailing")) {
                type = 1000;
            }
            else if (comboBox1.SelectedItem.Equals("Powered"))
            {
                type = 3000;
            }
            else if (comboBox1.SelectedItem.Equals("Crewed"))
            {
                type = 5000;
            }
        }

        private void comboBox2_SelectedIndexChanged(object sender, EventArgs e)
        {
            Submit.Enabled = true;
            dest = 10;
        }

        private void comboBox3_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox3.SelectedItem.Equals(1))
            {
                time = 1;
            }
            else if (comboBox3.SelectedItem.Equals(7))
            {
                time = 7;
            }
            else if (comboBox3.SelectedItem.Equals(14))
            {
                time = 14;
            }
        }

        private void Submit_Click(object sender, EventArgs e)
        {
            result = type + (dest * time);
            Submit.Text = "$" + result.ToString();
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("mareo1997@gmail.com");
                mail.To.Add("myapp002@fiu.edu");
                mail.Subject = "Test Mail";
                mail.Body = "This is for testing SMTP mail from GMAIL";

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("mareo1997", "yjustice11");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                MessageBox.Show("Mail Sent");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
    }
}
