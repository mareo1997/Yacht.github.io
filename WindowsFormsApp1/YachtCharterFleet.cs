using System;
using System.Net.Mail;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class YachtCharterFleet : Form
    {
        float type = 0, dest = 1, time = 1, result;
        public YachtCharterFleet()
        {
            InitializeComponent();
            if (destbox.Text.Equals(""))
            {
                Submit.Enabled = false;
            }
        }

        private void typebox_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (typebox.SelectedItem.Equals("Sailing"))
            {
                type = 2000;
            }
            else if (typebox.SelectedItem.Equals("Powered"))
            {
                type = 3000;
            }
        }


        private void destbox_SelectedIndexChanged(object sender, EventArgs e)
        {
            Submit.Enabled = true;
            if (destbox.SelectedItem.Equals("Americas"))
            {
                dest = 1000;
            }
            else if (destbox.SelectedItem.Equals("Caribbean"))
            {
                dest = 2000;
            }
            else if (destbox.SelectedItem.Equals("Mediterranean"))
            {
                dest = 3000;
            }
            else if (destbox.SelectedItem.Equals(""))
            {
                Submit.Enabled = false;
            }
        }


        private void timebox_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (timebox.SelectedItem.Equals(1))
            {
                time = 2.5f;
            }
            else if (timebox.SelectedItem.Equals(7))
            {
                time = 8.5f;
            }
            else if (timebox.SelectedItem.Equals(14))
            {
                time = 16f;
            }
        }


        private void Submit_Click(object sender, EventArgs e)
        {
            result = type + (dest * time);
            Quota.Text = "Rent Quote $" + result.ToString();
            try
            {
                using (MailMessage mail = new MailMessage()) {
                    mail.From = new MailAddress("mareo1997@gmail.com");
                    mail.To.Add(new MailAddress("sdomi047@fiu.edu"));
                    mail.Subject = "Yacht Chater Email Test";
                    mail.Body = "A " + typebox.Text + " going towards the " + destbox.Text + " for " + timebox.Text + " nights will cost around $" + result.ToString();
                    mail.Priority = MailPriority.Normal;
                    using (SmtpClient MailClient = new SmtpClient("smtp.gmail.com", 587))
                    {
                        MailClient.EnableSsl = true;
                        MailClient.Credentials = new System.Net.NetworkCredential("mareo1997@gmail.com", "password");
                        MailClient.Send(mail);
                    }
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

        }
    }

}
