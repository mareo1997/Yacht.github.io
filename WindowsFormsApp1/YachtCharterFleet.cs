using System;
using System.Net;
using System.Net.Mail;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class YachtCharterFleet : Form
    {
        float type = 0, dest = 1, time = 1, result;
        DateTime now = DateTime.Now;

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
            else if (typebox.SelectedItem.Equals("Crewed"))
            {
                type = 6000;
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
                dest = 3000;
            }
            else if (destbox.SelectedItem.Equals("Mediterranean"))
            {
                dest = 5000;
            }
            else if (destbox.SelectedItem.Equals(""))
            {
                Submit.Enabled = false;
            }
        }

        private void timebox_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (timebox.SelectedItem.Equals(5))
            {
                time = 6.5f;
            }
            else if (timebox.SelectedItem.Equals(7))
            {
                time = 8.5f;
            }
            else if (timebox.SelectedItem.Equals(14))
            {
                time = 16.5f;
            }
        } 

        private void Submit_Click(object sender, EventArgs e)
        {
            if (!IDForm.dialogOpened)
            {
                using (IDForm id = new IDForm())
                {
                    result = type + (dest * time);
                    DialogResult ok = id.ShowDialog(this);
                    if (ok == DialogResult.OK) {
                        email(sender, e);
                    }
                }
            }         
        }

        private void email(object sender, EventArgs e)
        {
            String emailaddr = IDForm.mailbox;
            String fstaddr = IDForm.Fst;
            String lstaddr = IDForm.Lst;
            try
            {
                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress("mareo1997@gmail.com");
                    mail.To.Add(new MailAddress(emailaddr));
                    mail.Subject = "Yacht Chater Email Test";
                    mail.Body = "Dear "
                        + fstaddr + " " + lstaddr 
                        + ",\n" 
                        + "A "
                        + typebox.Text + " yacht going towards the "
                        + destbox.Text + " for "
                        + timebox.Text + " nights will cost around $"
                        + result.ToString();
                    mail.Priority = MailPriority.Normal;
                    using (SmtpClient MailClient = new SmtpClient("smtp.gmail.com", 587))
                    {
                        MailClient.EnableSsl = true;
                        MailClient.Credentials = new NetworkCredential("mareo1997@gmail.com", "");
                        MailClient.Send(mail);
                        MessageBox.Show("Email Sent!");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("This email address is invalid. Please try again.");
                Submit_Click(sender, e);
            }
        }

        private void reminder(object sender, EventArgs e)
        {
                String emailaddr = IDForm.mailbox;
                String fstaddr = IDForm.Fst;
                String lstaddr = IDForm.Lst;
                try
                {
                    using (MailMessage mail = new MailMessage())
                    {
                        mail.From = new MailAddress("mareo1997@gmail.com");
                        mail.To.Add(new MailAddress("myapp002@fiu.edu"));
                        mail.Subject = "Yacht Chater Email Test";
                        mail.Body = "Dear "
                            + "Yapp" + " " + "Mareo"
                            + ",\n"
                            + "This is a reminder that your request for a "
                            + typebox.Text + " yacht going towards the "
                            + destbox.Text + " for "
                            + timebox.Text + " nights that will cost around $"
                            + result.ToString();
                        mail.Priority = MailPriority.Normal;
                        using (SmtpClient MailClient = new SmtpClient("smtp.gmail.com", 587))
                        {
                            MailClient.EnableSsl = true;
                            MailClient.Credentials = new NetworkCredential("mareo1997@gmail.com", "yjustice11");
                            MailClient.Send(mail);
                            MessageBox.Show("Email Sent!");
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("This email address is invalid. Please try again.");
                    Submit_Click(sender, e);
                }            
        }            
    }
}
