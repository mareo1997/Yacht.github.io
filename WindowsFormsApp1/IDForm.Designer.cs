using System.ComponentModel;

namespace WindowsFormsApp1
{
    partial class IDForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.FirstName = new System.Windows.Forms.Label();
            this.LastName = new System.Windows.Forms.Label();
            this.Email = new System.Windows.Forms.Label();
            this.Submit = new System.Windows.Forms.Button();
            this.first = new System.Windows.Forms.TextBox();
            this.last = new System.Windows.Forms.TextBox();
            this.mailtextbox = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // FirstName
            // 
            this.FirstName.AutoSize = true;
            this.FirstName.Location = new System.Drawing.Point(82, 40);
            this.FirstName.Name = "FirstName";
            this.FirstName.Size = new System.Drawing.Size(57, 13);
            this.FirstName.TabIndex = 0;
            this.FirstName.Text = "First Name";
            // 
            // LastName
            // 
            this.LastName.AutoSize = true;
            this.LastName.Location = new System.Drawing.Point(82, 120);
            this.LastName.Name = "LastName";
            this.LastName.Size = new System.Drawing.Size(58, 13);
            this.LastName.TabIndex = 1;
            this.LastName.Text = "Last Name";
            // 
            // Email
            // 
            this.Email.AutoSize = true;
            this.Email.Location = new System.Drawing.Point(82, 210);
            this.Email.Name = "Email";
            this.Email.Size = new System.Drawing.Size(32, 13);
            this.Email.TabIndex = 2;
            this.Email.Text = "Email";
            // 
            // Submit
            // 
            this.Submit.Location = new System.Drawing.Point(230, 271);
            this.Submit.Name = "Submit";
            this.Submit.Size = new System.Drawing.Size(75, 23);
            this.Submit.TabIndex = 3;
            this.Submit.Text = "Submit";
            this.Submit.UseVisualStyleBackColor = true;
            this.Submit.Click += new System.EventHandler(this.Submit_Click);
            // 
            // first
            // 
            this.first.Location = new System.Drawing.Point(230, 32);
            this.first.Name = "first";
            this.first.Size = new System.Drawing.Size(100, 20);
            this.first.TabIndex = 4;
            this.first.Validating += new System.ComponentModel.CancelEventHandler(this.textBox_Validating);
            // 
            // last
            // 
            this.last.Location = new System.Drawing.Point(230, 112);
            this.last.Name = "last";
            this.last.Size = new System.Drawing.Size(100, 20);
            this.last.TabIndex = 5;
            this.last.Validating += new System.ComponentModel.CancelEventHandler(this.textBox_Validating);
            // 
            // mailtextbox
            // 
            this.mailtextbox.Location = new System.Drawing.Point(230, 202);
            this.mailtextbox.Name = "mailtextbox";
            this.mailtextbox.Size = new System.Drawing.Size(100, 20);
            this.mailtextbox.TabIndex = 6;
            this.mailtextbox.Validating += new System.ComponentModel.CancelEventHandler(this.textBox_Validating);
            // 
            // IDForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(492, 418);
            this.Controls.Add(this.mailtextbox);
            this.Controls.Add(this.last);
            this.Controls.Add(this.first);
            this.Controls.Add(this.Submit);
            this.Controls.Add(this.Email);
            this.Controls.Add(this.LastName);
            this.Controls.Add(this.FirstName);
            this.Name = "IDForm";
            this.Text = "IDForm";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label FirstName;
        private System.Windows.Forms.Label LastName;
        private System.Windows.Forms.Label Email;
        private System.Windows.Forms.Button Submit;
        private System.Windows.Forms.TextBox first;
        private System.Windows.Forms.TextBox last;
        private System.Windows.Forms.TextBox mailtextbox;
    }
}