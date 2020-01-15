namespace WindowsFormsApp1
{
    partial class YachtCharterFleet
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
            this.Type = new System.Windows.Forms.Label();
            this.Destination = new System.Windows.Forms.Label();
            this.Time = new System.Windows.Forms.Label();
            this.Submit = new System.Windows.Forms.Button();
            this.typebox = new System.Windows.Forms.ComboBox();
            this.destbox = new System.Windows.Forms.ComboBox();
            this.timebox = new System.Windows.Forms.ComboBox();
            this.Quota = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // Type
            // 
            this.Type.AutoSize = true;
            this.Type.Location = new System.Drawing.Point(74, 95);
            this.Type.Name = "Type";
            this.Type.Size = new System.Drawing.Size(31, 13);
            this.Type.TabIndex = 1;
            this.Type.Text = "Type";
            // 
            // Destination
            // 
            this.Destination.AutoSize = true;
            this.Destination.Location = new System.Drawing.Point(74, 168);
            this.Destination.Name = "Destination";
            this.Destination.Size = new System.Drawing.Size(60, 13);
            this.Destination.TabIndex = 2;
            this.Destination.Text = "Destination";
            // 
            // Time
            // 
            this.Time.AutoSize = true;
            this.Time.Location = new System.Drawing.Point(74, 241);
            this.Time.Name = "Time";
            this.Time.Size = new System.Drawing.Size(87, 13);
            this.Time.TabIndex = 3;
            this.Time.Text = "Number of nights";
            // 
            // Submit
            //
            this.Submit.Location = new System.Drawing.Point(77, 307);
            this.Submit.Name = "Submit";
            this.Submit.Size = new System.Drawing.Size(75, 23);
            this.Submit.TabIndex = 5;
            this.Submit.Text = "Submit";
            this.Submit.UseVisualStyleBackColor = true;
            this.Submit.Click += new System.EventHandler(this.Submit_Click);
            // 
            // typebox
            // 
            this.typebox.Items.AddRange(new object[] {
            "",
            "Sailing",
            "Powered",
            "Crewed"});
            this.typebox.Location = new System.Drawing.Point(248, 87);
            this.typebox.Name = "typebox";
            this.typebox.Size = new System.Drawing.Size(121, 21);
            this.typebox.TabIndex = 7;
            this.typebox.SelectedIndexChanged += new System.EventHandler(this.typebox_SelectedIndexChanged);
            // 
            // destbox
            // 
            this.destbox.Items.AddRange(new object[] {
            "",
            "Americas",
            "Caribbean",
            "Mediterranean"});
            this.destbox.Location = new System.Drawing.Point(248, 160);
            this.destbox.Name = "destbox";
            this.destbox.Size = new System.Drawing.Size(121, 21);
            this.destbox.TabIndex = 8;
            this.destbox.SelectedIndexChanged += new System.EventHandler(this.destbox_SelectedIndexChanged);
            // 
            // timebox
            // 
            this.timebox.Items.AddRange(new object[] {
            "",
            1,
            7,
            14});
            this.timebox.Location = new System.Drawing.Point(248, 233);
            this.timebox.Name = "timebox";
            this.timebox.Size = new System.Drawing.Size(121, 21);
            this.timebox.TabIndex = 9;
            this.timebox.SelectedIndexChanged += new System.EventHandler(this.timebox_SelectedIndexChanged);
            // 
            // Quota
            // 
            this.Quota.AutoSize = true;
            this.Quota.Location = new System.Drawing.Point(248, 316);
            this.Quota.Name = "Quota";
            this.Quota.Size = new System.Drawing.Size(35, 13);
            this.Quota.TabIndex = 10;
            this.Quota.Text = "Quota";
            // 
            // YachtCharterFleet
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(654, 354);
            this.Controls.Add(this.Quota);
            this.Controls.Add(this.timebox);
            this.Controls.Add(this.destbox);
            this.Controls.Add(this.typebox);
            this.Controls.Add(this.Submit);
            this.Controls.Add(this.Time);
            this.Controls.Add(this.Destination);
            this.Controls.Add(this.Type);
            this.Name = "YachtCharterFleet";
            this.Text = "Yacht Charter Fleet";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label Type;
        private System.Windows.Forms.Label Destination;
        private System.Windows.Forms.Label Time;
        private System.Windows.Forms.Button Submit;
        private System.Windows.Forms.ComboBox typebox;
        private System.Windows.Forms.ComboBox destbox;
        private System.Windows.Forms.ComboBox timebox;
        private System.Windows.Forms.Label Quota;
    }
}

