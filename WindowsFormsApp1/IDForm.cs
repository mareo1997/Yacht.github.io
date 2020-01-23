using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class IDForm : Form
    {
        public static String fst;
        public static String lst;
        public static String mailbox;
        internal static bool dialogOpened { get; private set;}

        public static String Mailbox
        {
            get { return mailbox; }
            set { mailbox = value; }
        }

        public static String Fst
        {
            get { return fst; }
            set { fst = value; }
        }

        public static String Lst
        {
            get { return lst; }
            set { lst = value; }
        }

        public IDForm()
        {
            InitializeComponent();
            Submit.Enabled = false;
        }

        public void Submit_Click(object sender, EventArgs e)
        {
            this.DialogResult = DialogResult.OK;
        }

        private void textBox_Validating(object sender, EventArgs e)
        {
            if (this.first.Text == "" || this.last.Text == "" || this.mailtextbox.Text == "")
            {
                Submit.Enabled = false;
            }
            else if (String.IsNullOrWhiteSpace(this.first.Text) || String.IsNullOrWhiteSpace(this.last.Text) || String.IsNullOrWhiteSpace(this.mailtextbox.Text))
            {
                Submit.Enabled = false;
            }
            else
            {
                Submit.Enabled = true;
                fst = first.Text;
                lst = last.Text;
                mailbox = mailtextbox.Text;
            }
        }
    }
}
