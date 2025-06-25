const contentSection = document.getElementById('content');

const topicHTML = {

  /* --------------- ACCESS --------------- */

  // Make User Admin
  make_user_admin: `
    <h2>How to Make a User an Admin</h2>
    <hr>
    <ol>
      <li>On their taskbar search <span>Computer Management</span> and press <span>ENTER</span></li>
      <li>Select <span>Local Users and Groups</span></li>
      <li>Select <span>Groups</span></li>
      <li>Double-click <span>Administrators</span></li>
      <li>Click <span>Add</span></li>
      <li>Enter the user's <span>MWU username</span> or <span>email address</span></li>
      <li>Add them</span></li>
      <li>Click <span>Apply</span> and then <span>OK</span></li>
    </ol>
  `,

  // Student Access to Lab Computers
  student_access: `
    <h2>How Students Can Get Access to Lab Computers</h2>
    <hr>
    <ol>
      <li>Click <span><a href="./documents/tech_request.pdf" download="tech_request.pdf"><u>here</u></a></span> to download a Tech Request form</li>
      <li>Email the form to the faculty/staff member</li>
      <li>Forward the completed form to our deparment's <span>Microsoft Administrator</span> by either:
      <ol type="a">
        <li>Email</li>
        <li>Attaching it to a ticket</span>
      </ol>
    </ol>
    <img src="images/document_previews/tech_request_form/tech_request_form.png" style="width: 400px; height: 500px;">
    <hr>
    <h4>Important</h4>
    <p>If a student is inquiring about gaining access to a lab computer, please let them know that the faculty or staff member they’re working 
    with will need to contact us directly. We do not accept Tech Requests submitted by students. Additionally, please note that this form may 
    also need to be completed for student workers who are assisting other departments.</p>
  `,





  /* --------------- ACTIVE DIRECTORY --------------- */

  // Reset Password in AD
  ad_reset_pw: `
    <h2>How to Reset a Password in Active Directory</h2>
    <hr>
    <ol>
      <li>Open <span>Active Directory</span></li>
      <li>Right-click <span>midwestern.edu</span> on the left</li>
      <li>Click <span>Find</span></li>
      <li>Enter the user's name and click <span>Find Now</span></li>
      <li>Right-click the user's name under <span>Search results</span></li>
      <li>Click <span>Reset Password</span></li>
      <li>Create a password for the user and click <span>OK</span></li>
      <ol type="a">
        <li>Must be: <span>10+ characters long</span></li>
        <li>Include: <span>Numbers</span></li>
        <li>Include: <span>Symbols</span></li>
      </ol>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>For security reasons, avoid including the word <span>Midwestern</span> in any user passwords.<br><br>
    Also, keep in mind that when you reset a password in Active Directory, it may take up to <span>30 minutes to sync</span> with the 
    user’s <span>Microsoft account</span>. To be safe, let the user know it could take up to an hour. This helps set expectations and 
    prevents confusion if they’re able to sign into their Midwestern account but not their email right away.<br><br>
    If an hour passes and they still can't log in, we can be more confident that it’s a legitimate issue rather than just a delay in 
    synchronization.
  `,





  /* --------------- CANNED RESPONSES --------------- */

  // MFA Reset
  cr_mfa_reset: `
    <h2>Reset Microsoft Authenticator</h2>
    <hr>
    <h3>Authenticator Reset Complete – Action Required</h3>
    <p id="textToCopy1">Hello,<br><br>
    We’ve reset your Microsoft Authenticator to see if that resolves the issue. Please follow the steps below to complete the setup:<br><br>
    &emsp;<b>1</b>. Open the Microsoft Authenticator app<br>
    &emsp;<b>2</b>. On the home screen, tap your MWU email address<br>
    &emsp;<b>3</b>. Tap the ⚙️ in the top-right corner<br>
    &emsp;<b>4</b>. Select <b>Remove account</b><br><br>
    Once removed:<br><br>
    &emsp;<b>1</b>. On a computer, go to <b>www.office.com</b><br>
    &emsp;<b>2</b>. Click <b>Sign in</b><br>
    &emsp;<b>3</b>. Enter your MWU email address and password<br>
    &emsp;<b>4</b>. Click <b>Sign in</b><br>
    &emsp;<b>5</b>. Click the <b>Next</b> button until you see a QR code<br>
    &emsp;<b>6</b>. Open the Microsoft Authenticator app<br>
    &emsp;<b>7</b>. Tap <b>Verified IDs</b> at the bottom<br>
    &emsp;<b>8</b>. Choose <b>Scan QR code</b><br>
    &emsp;<b>9</b>. Scan the QR code, then click <b>Next</b><br><br>
    Once that’s complete, you should be all set.<br><br>
    Thank you,<br>
    IT Support</p>
    <button id="copy_button1" onclick="copy_functions1()">Copy</button>
  `,

  // Out of Country
  cr_traveling: `
    <h2>Out of Country Email Access</h2>
    <hr>
    <h3>Email Access While Traveling – Information Needed</h3>
    <p id="textToCopy1">Hello,<br><br>
    We’ll be happy to assist so that you continue to have access to your email while you’re away. To ensure your account is 
    configured properly and not flagged, please provide the following information:<br><br>
    &emsp;- Region(s) you’ll be traveling to<br>
    &emsp;- Departure Date<br>
    &emsp;- Return Date<br><br>
    Thank you,<br>
    IT Support</p>
    <button id="copy_button1" onclick="copy_functions1()">Copy</button>
    <hr>
    <h3>Out of Country Email Request Not Needed</h3>
    <p id="textToCopy2">Hello,<br><br>
    While you're away, you'll continue to have access to your email. At this time, requests are not required for travel 
    to Canada, Mexico, or Puerto Rico. We've confirmed this with the team responsible for managing email access.<br><br>
    If you have any further questions or need assistance with anything else, please don’t hesitate to reach out.<br><br>
    Thank you,<br>
    IT Support</p>
    <button id="copy_button2" onclick="copy_functions2()">Copy</button>
  `,

  // Password Reset
  cr_pw_reset: `
    <h2>Password Reset</h2>
    <hr>
    <h3>Password Reset – Phone Assistance Required</h3>
    <p id="textToCopy1">Hello,<br><br>
    For security reasons, we’re unable to reset passwords via email. However, if you give us a call, we’ll be happy to assist 
    you with resetting your password and getting you logged back in. You can reach us at <b>623-232-4357</b>.<br><br>
    Thank you,<br>
    IT Support</p>
    <button id="copy_button1" onclick="copy_functions1()">Copy</button>
  `,





  /* --------------- COMMAND PROMPT --------------- */

  // Commands
  cmd_commands: `
    <h2>Command Prompt Commands</h2>
    <hr>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th><b>Command</b></th>
          <th><b>Description</b></th>
          <th><b>Syntax</b></th>
          <th><b>Example</b></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>cd</b></td>
          <td>Changes what directory you're in</td>
          <td>cd <span class="span5";>[directory]</span></td>
          <td>cd <span class="span5";>C:\\Users</span></td>
        </tr>
        <tr>
          <td><b>cls</b></td>
          <td>Clears the Command Prompt window</td>
          <td>cls</td>
          <td>cls</td>
        </tr>
        <tr>
          <td><b>dir</b></td>
          <td>Shows files & folders within the directory you're currently in</td>
          <td>dir</td>
          <td>dir</td>
        </tr>
        <tr>
          <td><b>exit</b></td>
          <td>Closes Command Prompt</td>
          <td>exit</td>
          <td>exit</td>
        </tr>
        <tr>
          <td><b>getmac</b></td>
          <td>Displays mac address(es)</td>
          <td>getmac</td>
          <td>getmac</td>
        </tr>
        <tr>
          <td><b>gpupdate /force</b></td>
          <td>Forces a background update of all Group Policy settings</td>
          <td>gpupdate /force</td>
          <td>gpupdate /force</td>
        </tr>
        <tr>
          <td><b>ipconfig</b></td>
          <td>Displays basic network configuration settings</td>
          <td>ipconfig</td>
          <td>ipconfig</td>
        </tr>
        <tr>
          <td><b>ipconfig /all</b></td>
          <td>Displays detailed network configuration settings</td>
          <td>ipconfig /all</td>
          <td>ipconfig /all</td>
        </tr>
        <tr>
          <td><b>mkdir</b></td>
          <td>Makes a directory/folder</td>
          <td>mkdir <span class="span5";>[folder name]</span></td>
          <td>mkdir <span class="span5";>Scripts</span></td>
        </tr>
        <tr>
          <td><b>ping</b></td>
          <td>Useful for checking if a networked device is reachable</td>
          <td>ping <span class="span5";>[ip address]</span></td>
          <td>ping <span class="span5";>127.0.0.1</span></td>
        </tr>
        <tr>
          <td><b>ren</b></td>
          <td>Rename a file</td>
          <td>ren <span class="span5";>[filename] [new filename]</span></td>
          <td>ren <span class="span5";>draft.txt final.txt</span></td>
        </tr>
        <tr>
          <td><b>rmdir</b></td>
          <td>Removes a directory/folder</td>
          <td>rmdir <span class="span5";>[folder]</span></td>
          <td>rmdir <span class="span5";>Scripts</span></td>
        </tr>
        <tr>
          <td><b>sfc /scannow</b></td>
          <td>Scans and repairs corrupted system files</td>
          <td>sfc /scannow</td>
          <td>sfc /scannow</td>
        </tr>
      </tbody>
    </table>

  `,





  /* --------------- COMPUTERS --------------- */

  // Add to Domain
  add_to_domain: `
    <h2>How to Add a Computer to Our Domain</h2>
    <hr>
    <ol>
      <li>Right-click the Windows icon on the taskbar</li>
      <li>Select <span>System</span></li>
      <li>Click <span>Domain or workgroup</span></li>
      <li>Select the <span>Computer Name</span> tab</li>
      <li>Click the <span>Change</span> button to rename the computer</li>
      <li>Type the computer's name</li>
      <li>Under <span>Member of</span> select the <span>Domain</span> option</li>
      <li>For the domain type <span>midwestern.edu</span></li>
      <li>Click <span>OK</span></li>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>Once a computer is added to our domain, make sure to assign it to the appropriate Organizational Unit (OU) in Active 
    Directory. If it’s not placed in the correct OU, we won’t be able to remotely access the system or 
    push software to it.</p>
    <h2 style="margin-top: 50px;">How to Add a Computer to an Organizational Unit (Faculty & Staff)</h2>
    <hr>
    <ol>
      <li>Open <span>Active Directory</span></li>
      <li>Right-click <span>midwestern.edu</span></li>
      <li>Click <span>Find</span></li>
      <li>Click the dropdown menu that has <span>Users, Contacts, and Groups</span> selected
      <li>Select <span>Computers</span> from the dropdown menu</li>
      <li>Type the computer's name and click <span>Find Now</span></li>
      <li>Right-click the computer that comes up in the search results</li>
      <li>Select <span>Move</span></li>
      <li>On the tree double-click <span>Arizona</span> > <span>Computers</span> > <span>Computers - Faculty Staff</span></li>
      <li>Click <span>OK</span></li>
    </ol>
  `,

  // Imaging Computers
  imaging: `
    <h2>How to Image a Computer</h2>
    <hr>
    <ol>
      <li>Press <span>F12</span> during the startup</li>
      <li>Select <span>BIOS Setup</span></li>
      <li>Under <span>Boot Configuration</span>, select <span>Disable Secure Boot</span></li>
      <li>Under <span>Storage</span>, select <span>AHCI</span></li>
      <li>Save the settings and then the computer will reboot</li>
      <li>Press <span>F12</span> during the reboot</li>
      <li>Select <span>Onboard IPV4</span></li>
      <li>Select <span>64</span></li>
      <ol type="a">
        <li>Leave the username blank</li>
        <li>Password: <span>**********</span>
      </ol>
      <li>Scripted Installation: <span>Select appropriate option</span></li>
    </ol>
  `,

  //  No Internet
  no_internet: `
    <h2>What to do when a user loses internet access</h2>
    <hr>
  `,






  /* --------------- Documents --------------- */

  // How to Image a Computer
  gp_client_logs_doc: `
    <h2>GlobalProtect Client Logs</h2>
    <hr>
    <p>Click <a href="./documents/gp_client_logs.docx" download><u>here</u></a> to download the document.</p>
    <div class="carousel">
      <button class="prev">&#60;</button>
      <img src="images/document_previews/gp_client_logs/gp_client_logs_01.png" style="width: 400px; height: 500px;" class="active"/>
      <img src="images/document_previews/gp_client_logs/gp_client_logs_02.png" style="width: 400px; height: 500px;"/>
      <button class="next">&#62;</button>
    </div>
  `,

  // How to Image a Computer
  how_to_image_a_computer_doc: `
    <h2>How to Image a Computer</h2>
    <hr>
    <p>Click <a href="./documents/how_to_image_a_computer.docx" download><u>here</u></a> to download the document.</p>
    <img src="images/document_previews/how_to_image_a_computer/how_to_image_a_computer.png" style="width: 400px; height: 500px;">
  `,

  // MS Authenticator
  ms_authenticator_setup: `
    <h2>Microsoft Authenticator Setup Guide</h2>
    <hr>
    <p>Click <a href="./documents/ms_authenticator_setup.pdf" download><u>here</u></a> to download the document.</p>
    <div class="carousel">
      <button class="prev">&#60;</button>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_01.png" style="width: 400px; height: 500px;" class="active"/>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_02.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_03.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_04.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_05.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_06.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/ms_authenticator_setup/ms_authenticator_setup_07.png" style="width: 400px; height: 500px;"/>
      <button class="next">&#62;</button>
    </div>
  `,

  // Outlook Profile Reset Procedure Guide
  outlook_profile_reset_procedure_doc: `
    <h2>Microsoft Outlook Profile Reset Procedure Guide</h2>
    <hr>
    <p>Click <a href="./documents/outlook_profile_reset_procedure.docx" download><u>here</u></a> to download the document.</p>
    <div class="carousel">
      <button class="prev">&#60;</button>
      <img src="images/document_previews/outlook_profile_reset_procedure/outlook_profile_reset_procedure_01.png" style="width: 400px; height: 500px;" class="active"/>
      <img src="images/document_previews/outlook_profile_reset_procedure/outlook_profile_reset_procedure_02.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/outlook_profile_reset_procedure/outlook_profile_reset_procedure_03.png" style="width: 400px; height: 500px;"/>
      <button class="next">&#62;</button>
    </div>
  `,

  // Tech Request Form
  tech_request_doc: `
    <h2>Tech Request Form (Student Lab Access)</h2>
    <hr>
    <p>Click <a href="./documents/tech_request.pdf" download><u>here</u></a> to download the document.</p>
    <img src="images/document_previews/tech_request_form/tech_request_form.png" style="width: 400px; height: 500px;">
  `,

  // VPN Setup Guide
  vpn_instructions_doc: `
    <h2>VPN Setup Guide</h2>
    <hr>
    <p>Click <a href="./documents/vpn_instructions.pdf" download><u>here</u></a> to download the document.</p>
    <div class="carousel">
      <button class="prev">&#60;</button>
      <img src="images/document_previews/vpn_instructions/vpn_instructions_01.png" style="width: 400px; height: 500px;" class="active"/>
      <img src="images/document_previews/vpn_instructions/vpn_instructions_02.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/vpn_instructions/vpn_instructions_03.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/vpn_instructions/vpn_instructions_04.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/vpn_instructions/vpn_instructions_05.png" style="width: 400px; height: 500px;"/>
      <img src="images/document_previews/vpn_instructions/vpn_instructions_06.png" style="width: 400px; height: 500px;"/>
      <button class="next">&#62;</button>
    </div>
  `,



  

  /* --------------- GOOGLE CHROME --------------- */

  // Import/Export Bookmarks
  gc_bookmarks: `
    <h2>How to Import and Export Google Chrome Bookmarks</h2>
    <hr>
    <ol>
      <li>Open <span>Google Chrome</span></li>
      <li>Click the <span>⋮</span> at the top-right</li>
      <li>Select <span>Bookmarks and lists</span></li>
      <li>Click <span>Bookmark manager</span></li>
      <li>Click the <span>⋮</span> next to the <span>Search bookmarks</span> searchbar</li>
      <li>Click <span>Export bookmarks</span> or <span>Import bookmarks</span></li>
    </ol>
  `,

  // Import Google Chrome Shortcuts Using C$ Share
  import_gc_bookmarks_cshare: `
    <h2>How to Transfer Google Chrome Bookmarks Using C$ Share</h2>
    <hr>
    <h3>Copy the Old Bookmarks</h3>
    <ol>
      <li>Access the user's previous computer</li>
      <li>Go to <span>File Explorer</span></li>
      <li>Click <span>View</span> at the top</li>
      <li>Scroll down and select <span>Show</span></li>
      <li>Click <span>Hidden items</span> so it is checked
      <li>On left side, scroll down and click <span>Local Disk (C:)</span></li>
      <li>Click <span>Users</span> and choose the user's account</li>
      <li>Click <span>AppData</span></li>
      <li>Click <span>Local</span></li>
      <li>Click <span>Google</span></li>
      <li>Click <span>Chrome</span></li>
      <li>Click <span>User's Data</span></li>
      <li>Click <span>Default</span></li>
      <li>Scroll down and copy <span>Bookmarks</span> and <span>Bookmarks.bak</span></li>
    </ol>
    <hr>
    <h3>Use C$ Share and Paste the Bookmarks</h3>
    <ol>
      <li>On your taskbar search <span>\\\\</span><span style="color: #777";>user's new ip address</span><span>\\c$</span></li>
      <li>On left side, scroll down and click <span>Local Disk (C:)</span></li>
      <li>Click <span>Users</span> and choose the user's account</li>
      <li>Click <span>AppData</span></li>
      <li>Click <span>Local</span></li>
      <li>Click <span>Google</span></li>
      <li>Click <span>Chrome</span></li>
      <li>Click <span>User's Data</span></li>
      <li>Click <span>Default</span></li>
      <li>Paste the bookmarks</li>
    </ol>
  `,

  // IT Bookmarks
  IT_bookmarks: `
    <h2>IT Bookmarks</h2>
    <hr>
    <ol>
      <li><a href="http://kbox1100/adminui/summary.php" target="_blank" style="color: #e0e0e0;">Kace</a></li>
      <li><a href="https://online.midwestern.edu/auth/login.cgi" target="_blank" style="color: #e0e0e0;">CARS Login</a></li>
      <li><a href="https://www.biaaz.org/wp-content/uploads/2019/09/MWU-Glendale-Campus-Map-00519.pdf" target="_blank" style="color: #e0e0e0;">Campus Map</a></li>
      <li><a href="https://www.virustotal.com/gui/home/upload" target="_blank" style="color: #e0e0e0;">Virus Total</a></li>
      <li><a href="https://10.170.0.91/recordings/index.php?m=voicemail&folder=INBOX&q=&start=0&span=15&order=calldate&sort=desc" target="_blank" style="color: #e0e0e0;">Voicemail Inbox</a></li>
      <li>MS Admin Tools <span class="span2";>(</span><span>folder</span><span class="span2";>)</span></li>
      <ol type="a">
        <li><a href="https://admin.microsoft.com/Adminportal/Home#/homepage" target="_blank" style="color: #e0e0e0;">Microsoft 365 Admin Center</a></li>
        <li><a href="https://admin.exchange.microsoft.com/#/" target="_blank" style="color: #e0e0e0;">Exchange Admin Center</a></li>
        <li><a href="https://admin.teams.microsoft.com/dashboard" target="_blank" style="color: #e0e0e0;">Teams Admin Center</a></li>
        <li><a href="https://intune.microsoft.com/#home" target="_blank" style="color: #e0e0e0;">Intune Admin Center</a></li>
        <li><a href="https://aad.portal.azure.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade/~/AllGroups" target="_blank" style="color: #e0e0e0;">Group SSO Page</a></li>
      </ol>
    </ol>
    <hr>
    <h4>Information</h4>
    <p>These are commonly used bookmarks that may be helpful for new hires in our department, particularly those working at the Help Desk.</p>
    <p>Download bookmarks <a href="./bookmarks/it_bookmarks.html" download="it_bookmarks.html" style="color: rgb(201, 103, 67);">here</a></p>
  `,





  /* --------------- Kaltura Capture --------------- */

  // Download Kaltura Capture
  download_kaltura: `
    <h2>How to Download and Install Kaltura Capture</h2>
    <hr>
    <ol>
      <li>Go to <span>Canvas</span></li>
      <li>Click <span>Courses</span> on the left</li>
      <li>Select a course</li>
      <li>Click <span>My Media</span> on the left</li>
      <li>Click <span>Add New</span> on the upper-right</li>
      <li>Select <span>Kaltura Capture</span></li>
      <li>Click <span>Download for Windows</span></li>
      <li>Double-click the file you downloaded</li>
      <li>After it is installed, return to <span>Canvas</span></li>
      <li>Repeat steps <span>2</span> through <span>5</span> to activate it <span class="span2";>(</span><span>just needs to be done once</span><span class="span2";>)</span></li>
    </ol>
  `,

  // Recover Recordings
  recover_kaltura_recordings: `
    <h2>How to Recover Kaltura Recordings</h2>
    <hr>
    <h3>Recover the Recording</h3>
    <ol>
      <li>Verify: </li>
      <ol type="a";>
        <li>Who recorded the lecture</li>
        <li>Where the lecture took place <span class="span2";>(</span><span>campus</span> <span class="span2";>+</span> <span>building</span><span class="span2";>)</span></li>
        <li>When the lecture took place <span class="span2";>(</span><span>date</span> <span class="span2";>+</span> <span>time</span><span class="span2";>)</span></li>
      </ol>
      <li>Go to <a href="http://kbox1100/adminui/summary.php" target="_blank" style="color: rgb(201, 103, 67);">Kace</a></li>
      <li>Find the IP address of the lecture hall computer</li>
      <li>On your taskbar search <span>\\\\</span><span style="color: #777";>ip address</span><span>\\c$</span></li>
      <li>Locate the recording</li>
      <li>Drag the recording to your <span>Desktop</span> on your computer</li>
    </ol>
    <hr>
    <h3>Upload the Recording to Canvas</h3>
    <ol>
      <li>Go to <span>Canvas</span></li>
      <li>Click <span>Admin</span> on the left</li>
      <li>Click <span>Midwestern University</span></li>
      <li>Click <span>People</span> on the left</li>
      <li>Search for the user</li>
      <li>Click the user's name</li>
      <li>Click <span>Act as User</span> and click <span>Proceed</span></li>
      <li>Click <span>Courses</span> on the left menu</li>
      <li>Select a course <span class="span2";>(</span><span>doesn't matter which one</span><span class="span2";>)</span></li>
      <li>Click <span>My Media</span> on the left</li>
      <li>Click <span>Add New</span> on the upper-right</li>
      <li>Select <span>Media Upload</span></li>
    </ol>
  `,

  // Recover Recordings
  recordings_shortcut: `
    <h2>Shortcut to Access Lecture Hall Recordings</h2>
    <hr>
    <h3>Requirements</h3>
    <ol>
      <li>Open the <span>Microsoft Store</span></li>
      <li>Search for <span>Python 3.13</span></li>
      <li>Download and install <span>Python 3.13</span></li>
    </ol>
    <hr>
    <h3>Instructions</h3>
    <ol>
      <li>Copy this path: <span>K:\\AZITS\\AZ Lec Halls (recordings shortcut)</span></li>
      <li>Paste it in the searchbar on your taskbar and press <span>ENTER</span></li>
      <li>Select a folder <span class="span2";>(</span><span>e.g., Auditoriums</span><span class="span2";>)</span></li>
      <li>Double-click one of the lecture halls</li>
    </ol>
    <hr>
    <p id="textToCopy1">K:\\AZITS\\AZ Lec Halls (recordings shortcut)</p>
    <button id="copy_button1" onclick="copy_functions1()">Copy</button><br>
  `,





  /* --------------- Media Resources --------------- */

  // Network Drive
  mr_remap_network_drive: `
    <h2>How to Re-Map Media Resources' Network Drive</h2>
    <hr>
    <ol>
      <li>Open <span>File Explorer</span></li>
      <li>Righ-click the network drive you want to re-map</li>
      <li>Click <span>Disconnect</span></li>
      <li>Right-click <span>This PC</span></li>
      <li>Click <span>Map network drive...</span></li>
      <li>Click the <span>Drive:</span> dropdown menu</li>
      <ol type="I">
        <li>Choose the same letter they used before</li>
      </ol>
      <li>Click the <span>Folder:</span> box</li>
      <li>Type: <span class="span2";>\\\\</span><span>ip address</span><span class="span2";>\\</span><span>azmedia02</span></li>
      <li>Check the box: <span>Reconnect at sign-in</span></li>
      <li>Check the box: <span>Connect using different credentials</span></li>
      <li>Enter network credentials:</li>
      <ol type="I">
        <li>Username: <span>**********</span></li>
        <li>Password: <span>**********</span></li>
      </ol>
    </ol>
    <hr>
    <h4>Suggestion</h4>
    <p>If you’re having trouble with this, feel free to reach out to <span>Phil Kemp</span>. He helped configure this and can walk you through the steps or 
    clear up any confusion.</p>
  `,





  /* --------------- MS AUTHENTICATOR --------------- */

  // Reset MS Authenticator
  reset_mfa: `
    <h2>How to Reset a User's Microsoft Authenticator</h2>
    <hr>
    <h3>Reset Authenticator From the Microsoft Entra Admin Center</h3>
    <ol>
      <li>Click <span><a href="https://aad.portal.azure.com/#@midwestern0.onmicrosoft.com/dashboard/private/6d3c7a9b-9918-4730-ba51-c551f582e059"><u>here</u></a></span> to get to the <span>Mircosoft Entra Admin Center</span></li>
      <li>If needed, log in using your Microsoft Admin credentials</li>
      <li>Click <span>Users</span> on the left menu</li>
      <li>Search for the user</li>
      <li>Click on the user's name</li>
      <li>Click <span>Authentication methods</span> on the left side</li>
      <li>Near the top-right click <span>Revoke multifactor authentication sessions</span></li>
      <li>Near the top-right click <span>Require re-register multifactor authentication</span></li>
      <li>Have the user remove their MWU email from the <span>Microsoft Authenticator</span> app</li>
    </ol>
    <hr>
    <h3>Remove MWU Email From the Microsoft Authenticator App</h3>
    <ol>
      <li>Open the <span>Mircosoft Authenticator</span> app</li>
      <li>Tap the MWU email address on the authenticator's home screen</li>
      <li>Tap the ⚙️ in the top-right corner</li>
      <li>Tap <span>Remove account</span></li>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>When the user sets up the Microsoft Authenticator again, it will need to be done using a separate device from their phone. This is because, at some point 
    during the setup, they’ll need to scan a QR code—and they won’t be able to scan the QR code if it’s displayed on the same phone they’re using to set up the app.</p>
  `,

  // Set Up Microsoft Authenticator
  set_up_mfa: `
    <h2>How to Set Up the Microsoft Authenticator</h2>
    <hr>
    <ol>
      <li>Go to <span>www.office.com</span></li>
      <li>Click <span>Sign in</span></li>
      <li>Enter <span>MWU email address</span></li>
      <li>Click the <span>Next</span> button until a <span>QR code</span> appears</li>
      <li>Scan the <span>QR code</span> and click <span>Next</span></li>
      <ul>
        <li>If notified the QR code has already been used, refresh the webpage</li>
      </ul>
      <li>Enter the same code displayed on the webpage into the <span>Microsoft Authenticator app</span></li>
      <li>Click the <span>Next</span> button a couple more times to complete the setup</li>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>When the user sets up the Microsoft Authenticator, it will need to be done using a separate device from their phone. This is because, they won’t be able to scan 
    the QR code if it’s displayed on the same phone they’re using to set up the app.</p>
    <p>Another helpful step is to send the user <a href="./documents/ms_authenticator_setup.pdf" download><u>this</u></a> document so they can see exactly 
    what the setup process looks like and confirm whether they’re following the correct steps.</p>
  `,





  /* --------------- MS AUTHENTICATOR --------------- */

  // Reset MS Authenticator
  reset_mfa: `
    <h2>How to Reset a User's Microsoft Authenticator</h2>
    <hr>
    <h3>Reset Authenticator From the Microsoft Entra Admin Center</h3>
    <ol>
      <li>Click <span><a href="https://aad.portal.azure.com/#@midwestern0.onmicrosoft.com/dashboard/private/6d3c7a9b-9918-4730-ba51-c551f582e059"><u>here</u></a></span> to get to the <span>Mircosoft Entra Admin Center</span></li>
      <li>If needed, log in using your Microsoft Admin credentials</li>
      <li>Click <span>Users</span> on the left menu</li>
      <li>Search for the user</li>
      <li>Click on the user's name</li>
      <li>Click <span>Authentication methods</span> on the left side</li>
      <li>Near the top-right click <span>Revoke multifactor authentication sessions</span></li>
      <li>Near the top-right click <span>Require re-register multifactor authentication</span></li>
      <li>Have the user remove their MWU email from the <span>Microsoft Authenticator</span> app</li>
    </ol>
    <hr>
    <h3>Remove MWU Email From the Microsoft Authenticator App</h3>
    <ol>
      <li>Open the <span>Mircosoft Authenticator</span> app</li>
      <li>Tap the MWU email address on the authenticator's home screen</li>
      <li>Tap the ⚙️ in the top-right corner</li>
      <li>Tap <span>Remove account</span></li>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>When the user sets up the Microsoft Authenticator again, it will need to be done using a separate device from their phone. This is because, at some point 
    during the setup, they’ll need to scan a QR code—and they won’t be able to scan the QR code if it’s displayed on the same phone they’re using to set up the app.</p>
  `,






  /* --------------- MS OUTLOOK --------------- */

  // Default Browser That Opens When Links Are Clicked in Outlook
  outlook_default_browser: `
    <h2>Change the Default Browser for Opening Links in Outlook</h2>
    <hr>
    <h3>Classic Outlook</h3>
    <ol>
      <li>Open <span>Outlook</span></li>
      <li>Click <span>File</span> at the top</li>
      <li>Click <span>Options</span> on the bottom-left</li>
      <li>Select the <span>Advanced</span> tab on the left</li>
      <li>Go to the <span>File and browser preferences</span> section</li>
      <li>Next to <span>Open hyperlinks from Outlook in</span> choose <span>Default Browser</span></li>
    </ol>
    <hr>
    <h3>New Outlook</h3>
    <ol>
      <li>Open <span>Outlook</span></li>
      <li>Click the ⚙️ at the top-right</li>
      <li>Click the <span>General</span> tab</li>
      <li>Click the <span>Links</span> tab</li>
      <li>Select <span>Default browser</span></li>
    </ol>
  `,

  // Delete MS Outlook Cache
  outlook_clear_cache: `
    <h2>How to Clear Outlook Cache</h2>
    <hr>
    <p><span class="span2";>1.</span> Copy & paste the path below in the searchbar on your taskbar and press <span>ENTER</span></p>
    <p id="textToCopy3" style="color: rgb(201, 103, 67);">%localappdata%\\Microsoft\\Outlook\\RoamCache</p>
    <button id="copy_button3" onclick="copy_functions3()">Copy</button><br><br>
    <p><span class="span2";>2.</span> Delete all the files you see within the <span>RoamCache</span> directory</p>
    <img src="images/ms_outlook/clear_cache.png" style="width: 550px; height: 400px; margin-left: 0px;"/>
  `,

  outlook_from_button_missing: `
    <h2>From Button in Outlook Missing (Fix)</h2>
    <hr>
    <h3>Classic Outlook</h3>
    <ol>
      <li>Open <span>Outlook</span></li>
      <li>Click <span>New Email</span> at the top-left</li>
      <li>Click <span>Options</span> at the top</li>
      <li>Click <span>From</span> in the <span>Show Fields</span> column at the top</li>
    </ol>
    <hr>
    <h3>New Outlook</h3>
    <ol>
      <li>Open <span>Outlook</span></li>
      <li>Click <span>New mail</span> at the top-left</li>
      <li>Click <span>Options</span> at the top</li>
      <li>Click the <span>Show From</span> box so it is checked</li>
    </ol>
  `,

  // Default Browser That Opens When Links Are Clicked in Outlook
  outlook_profile_reset_procedure: `
    <h2>Outlook Profile Reset Procedure</h2>
    <hr>
    <ol>
      <li>Close any open instances of <span>Outlook</span></li>
      <li>On your taskbar search <span>Control Panel</span> and click <span>ENTER</span></li>
      <li>Click <span>Mail</span> <span class="span2";>(</span><span>Microsoft Outlook</span><span class="span2";>)</span></li>
      <li>Click <span>Show Profiles...</span></li>
      <li>Click <span>Add...</span></li>
      <li>Make the profile name <span>New</span> and click <span>OK</span></li>
      <li>Click <span>Next</span></li>
      <li>Click <span>Finish</span></li>
    </ol>
    <hr>
    <h4>Suggestion</h4>
    <p>For visual instructions, download <a href="./documents/outlook_profile_reset_procedure.docx" download><u>this</u></a> document.</p>
  `,

  // Transfer Signatures
  outlook_transfer_signatures: `
    <h2>How to Transfer Outlook Signatures Using C$ Share</h2>
    <hr>
    <h3>Copy the Signatures</h3>
    <ol>
      <li>Access the user's previous computer</li>
      <li>Go to <span>File Explorer</span></li>
      <li>Click <span>View</span> at the top</li>
      <li>Scroll down and select <span>Show</span></li>
      <li>Click <span>Hidden items</span> so it is checked
      <li>On left side, scroll down and click <span>Local Disk (C:)</span></li>
      <li>Click <span>Users</span> and choose the user's account</li>
      <li>Click <span>AppData</span></li>
      <li>Click <span>Roaming</span></li>
      <li>Click <span>Microsoft</span></li>
      <li>Click <span>Signatures</span></li>
      <li>Copy everything within the <span>Signatures</span> folder</li>
    </ol>
    <hr>
    <h3>Paste the Signatures</h3>
    <ol>
      <li>On your taskbar search <span>\\\\</span><span style="color: #777";>user's ip address</span><span>\\c$</span></li>
      <li>On left side, scroll down and click <span>Local Disk (C:)</span></li>
      <li>Click <span>Users</span> and choose the user's account</li>
      <li>Click <span>AppData</span></li>
      <li>Click <span>Roaming</span></li>
      <li>Click <span>Microsoft</span></li>
      <li>Click <span>Signatures</span></li>
      <li>Paste the signatures within the <span>Signatures</span> folder</li>
    </ol>
  `,

  // Teams Add-In Missing
  outlook_teams_addin_missing: `
    <h2>Outlook Calendar – Teams Add-In Missing (Fix)</h2>
    <hr>
    <h3>Classic Outlook</h3>
    <ol>
      <li>Click <span>File</span> at the upper-left</li>
      <li>Click <span>Options</span> at the bottom-left</li>
      <li>Click <span>Add-ins</span></li>
      <li>At the bottom, click <span>Go...</span> next to <span>COM Add-ins</span></li>
      <li>Make sure <span>Microsoft Teams Meeting Add-in for Microsoft Office</span> is selected and click <span>OK</span></li>
      <li>Repeat steps <span>1</span> <span class="span2">-</span> <span>3</span></li>
      <li>Click <span>COM Add-ins</span></li>
      <li>On the dropdown select <span>Disabled Items</span> and click <span>Go...</span></li>
      <li>If the Teams add-in is present, select it, then click <span>Enable</span>, and click <span>Close</span></li>
    </ol>
  `,



  

   /* --------------- MS TEAMS --------------- */

  // Clear MS Teams Cache
  teams_clear_cache: `
    <h2>How to Clear Cache for Microsoft Teams</h2>
    <hr>
    <p><span class="span2";>1.</span> Copy & paste the path below in the searchbar on your taskbar and press <span>ENTER</span></p>
    <p id="textToCopy3" style="color: rgb(201, 103, 67);">C:\\Users\\%username%\\AppData\\Local\\Packages\\MSTeams_8wekyb3d8bbwe</p>
    <button id="copy_button3" onclick="copy_functions3()">Copy</button><br><br>
    <p><span class="span2";>2.</span> Delete all files and folders within the directory</p>
    <img src="images/ms_teams/clear_cache.png" style="width: 550px; height: 285px; margin-left: 0px;"/>
    <hr>
    <h4>Suggestion</h4>
    <p>If you receive a notification saying that some files can’t be deleted because they’re open in another application, you can simply 
    click the <span>Skip</span> button to continue.</p>
  `,

  // Office Move
  teams_office_move: `
    <h2>Do Not Uninstall Teams Phone During Office Move</h2>
    <hr>
    <p>During office moves, <span>DO NOT</span> move the Teams phone. These phones must remain in their assigned offices because they are tied to the room—not the individual using them.<br><br>
    This is important because each phone contains emergency location information. If someone dials 911 from a Teams phone, emergency responders will be directed to the exact building, floor, and room.<br><br>
    All the user simply needs to do is log into the Teams phone in the new office.</p>
  `,





  /* --------------- MS TEAMS PHONE --------------- */

  // Policy on office moves
  teams_cap_pw: `
    <h2>Password for Common Area Phones</h2>
    <hr>
    <p>The password should be <span><b>**********</b></span>, but if that doesn’t work, you can also try 
    <span><b>**********</b></span> or <span><b>**********</b></span>.
  `,





  /* --------------- MS WORD --------------- */

  // EndNote Missing From Toolbar in Word
  endnote_missing: `
    <h2>How to Fix EndNote Missing from the Toolbar</h2>
    <hr>
    <h3>Check Settings in Word</h3>
    <ol>
      <li>Open <span>Word</span></li>
      <li>Click <span>File</span> at the top</li>
      <li>On the bottom-left click <span>Options</span></li>
      <li>Click <span>Customize Ribbon</span> on the left</li>
      <li>Under <span>Main Tabs</span> make sure the <span>EndNote</span> box is checked</li>
      <li>Click <span>OK</span></li>
    </ol>
    <hr>
    <h3>Check File Explorer</h3>
    <ol>
      <li>Go to <span>File Explorer</span></li>
      <li>Click <span>Local Disk (C:)</span> on the left</li>
      <li>Click <span>Program Files (x86)</span></li>
      <li>Click the <span>EndNote</span> folder</li>
      <li>Click <span>Configure EndNote.exe</span></li>
      <li>Select <span>Configure EndNote components</span> and click <span>Next</span></li>
      <li>Select <span>Cite While You Write add-in for MS Office</span> and click <span>Next</span></li>
      <li>Click <span>Finish</span></li>
    </ol>
  `,

  // Faded-looking Document in Word
  faded_looking_document: `
    <h2>How to Fix a Faded-Looking Document</h2>
    <hr>
    <ol>
      <li>On your taskbar search <span>sysdm.cpl</span></li>
      <li>Click <span>ENTER</span></li>
      <li>Select the <span>Advanced</span> tab</li>
      <li>In the <span>Performance</span> section click <span>Settings</span></li>
      <li>Click the <span>Adjust for best appearance</span> bubble</li>
      <li>Click <span>OK</span></li>
    </ol>
  `,

  // Page Memge Format Error Fix
  page_merge_format: `
    <h2>Fix Page Numbers Showing as { PAGE \\\ * MERGEFORMAT }</h2>
    <hr>
    <ol>
      <li>Open <span>Word</span></li>
      <li>Open the document with the error</li>
      <li>Press <span>ALT</span> + <span>F9</span></li>
    </ol>
    <hr>
    <h4>Example</h4><br>
    <img src="images/ms_word/page_merge_format_error.png" alt="Example of the Page Merge Format error" style="width: 750px; height: 400px; margin-left: 20px;"/>
  `,
  




  /* --------------- PASSWORDS --------------- */

  // Phonetic Alphabet
  phonetic_abc: `
    <h2>Phonetic Alphabet</h2>
    <hr>
    <div id="phonetic-abc-container">
      <div class="phonetic-abc-column">
        <p>
        <b><span>A</span></b> <span class="span2";>-</span> Alpha<br><br>
        <b><span>B</span></b> <span class="span2";>-</span> Bravo<br><br>
        <b><span>C</span></b> <span class="span2";>-</span> Charlie<br><br>
        <b><span>D</span></b> <span class="span2";>-</span> Delta<br><br>
        <b><span>E</span></b> <span class="span2";>-</span> Echo<br><br>
        <b><span>F</span></b> <span class="span2";>-</span> Foxtrot<br><br>
        <b><span>G</span></b> <span class="span2";>-</span> Golf<br><br>
        <b><span>H</span></b> <span class="span2";>-</span> Hotel<br><br>
        <b><span>I</span></b> <span class="span2";>-</span> India
      </p>
      </div>
      <div class="phonetic-abc-column">
        <p>
        <b><span>J</span></b> <span class="span2";>-</span> Juliet<br><br>
        <b><span>K</span></b> <span class="span2";>-</span> Kilo<br><br>
        <b><span>L</span></b> <span class="span2";>-</span> Lima<br><br>
        <b><span>M</span></b> <span class="span2";>-</span> Mike<br><br>
        <b><span>N</span></b> <span class="span2";>-</span> November<br><br>
        <b><span>O</span></b> <span class="span2";>-</span> Oscar<br><br>
        <b><span>P</span></b> <span class="span2";>-</span> Papa<br><br>
        <b><span>Q</span></b> <span class="span2";>-</span> Quebec<br><br>
        <b><span>R</span></b> <span class="span2";>-</span> Romeo
        </p>
      </div>
      <div class="phonetic-abc-column">
        <p>
        <b><span>S</span></b> <span class="span2";>-</span> Sierra<br><br>
        <b><span>T</span></b> <span class="span2";>-</span> Tango<br><br>
        <b><span>U</span></b> <span class="span2";>-</span> Uniform<br><br>
        <b><span>V</span></b> <span class="span2";>-</span> Victor<br><br>
        <b><span>W</span></b> <span class="span2";>-</span> Whiskey<br><br>
        <b><span>X</span></b> <span class="span2";>-</span>  X-ray<br><br>
        <b><span>Y</span></b> <span class="span2";>-</span> Yankee<br><br>
        <b><span>Z</span></b> <span class="span2";>-</span> Zulu
        </p>
      </div>
    </div>
    <hr>
    <h4>Suggestion</h4>
    <p>To avoid confusion when reading passwords aloud, it’s helpful to clarify each letter with a word—especially when 
    speaking with someone who may have hearing difficulties.</p>
  `,
  
  // Resetting Passwords in CARS
  reset_cars_pw: `
    <h2>How to Reset a Password in CARS</h2>
    <hr>
    <ol>
      <li>Open a web browser and go to: <span>https://online.midwestern.edu/</span></li>
      <li>Go to the <span>ITS</span> tab at the top</li>
      <li>Under the <span>Support</span> column, click <span>Password Reset</span>
      <li>Click the <span>?</span> button</li>
      <li>Enter the user's first and last name, then click <span>Search</span></li>
      <li>Ask the user to verify:</li>
      <ol type="I">
        <li>The <span>last four</span> numbers in their <span>SSN</span></li>
        <li>The <span>zipcode</span> on file</li>
        <li>Their <span>birthdate</span></li>
      </ol>
      <li>Check the <span>SSN</span>, <span>Zip</span>, and <span>Birth Month/Day</span> boxes</li>
      <li>Check the <span>Reset Password</span> box and click <span>Submit</span></li>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>It’s imperative that you do <span>Step 6</span>. Each year, we receive a few calls from individuals outside 
    of Midwestern attempting to impersonate others. If someone gains unauthorized access to a CARS account, they can 
    potentially access a significant amount of personally identifiable information (PII) from systems like UKG and other 
    connected platforms.</p>
  `,





  /* --------------- PRINTERS --------------- */

  // Add a Printer
  add_printer: `
    <h2>How to Add a Printer</h2>
    <hr>
    <ol>
      <li>On your taskbar search for the print server:</li>
      <ol type="a">
        <li><span>\\\\azeduprint01</span> (AZ Campus Printers)</li>
        <li><span>\\\\azcliprint03</span> (AZ Clinic Printers)</li>
        <li><span>\\\\iledups02</span> (IL Campus Printers)</li>
        <li><span>\\\\ilclips03</span> (IL Clinic Printers)</li>
      </ol>
      <li>Double-click the printer you need to add</li>
    </ol>
  `,

  // Add a Printer by IP
  add_printer_by_ip: `
    <h2>How to Add a Printer by IP Address</h2>
    <hr>
    <h3>Find the IP Address</h3>
    <ol>
      <li>On your taskbar search for the print server:</li>
      <ol type="a">
        <li><span>\\\\azeduprint02</span> (AZ Campus Printers)</li>
        <li><span>\\\\azcliprint03</span> (AZ Clinic Printers)</li>
        <li><span>\\\\iledups02</span> (IL Campus Printers)</li>
        <li><span>\\\\ilclips03</span> (IL Clinic Printers)</li>
      </ol>
      <li>Click <span>View</span> at the top</li>
      <li>Select <span>Details</span> from the dropdown menu</li>
      <li>Find the printer you need to add</li>
      <li>Under <span>Comments</span> you can find the IP address</li>
    </ol>
    <hr>
    <h3>Add the printer</h3>
    <ol>
      <li>Right-click the Windows icon on the taskbar</li>
      <li>Select <span>Settings</span></li>
      <li>Click <span>Bluetooth & devices</span> on the left</li>
      <li>Click <span>Printers & scanners</span></li>
      <li>Click <span>Add device</span></li>
      <li>Scroll down and click <span>Add a new device manually</span></li>
      <li>Select <span>Add a printer by IP address or hostname</span> and click <span>Next</span></li>
      <li>On the <span>Device type</span> menu choose <span>TCP/IP Device</span></li>
      <li>Enter the IP address and click <span>Next</span></li>
      <li>If prompted to select a printer driver, do the following below. Otherwise, go to the next step</li>
      <ol type="a">
        <li>Manufacturer: <span>Microsoft</span></li>
        <li>Printers: <span>Microsoft PCL6 Class Driver</span></li>
        <li>Click <span>Next</span></li>
      </ol>
      <li>Select <span>Use the driver that is currently installed</span> and click <span>Next</span></li>
      <li>Name the printer and click <span>Next</span></li>
      <li>Select <span>Do not share this printer</span> and click <span>Next</span></li>
      <li>Click <span>Finish</span></li>
    </ol>
  `,

  // Memory Error
  printer_memory_error: `
    <h2>Insufficient Memory to Perform Operation (Fix)</h2>
    <hr>
    <ol>
      <li>On your taskbar search and click <span>View advanced system settings</span></li>
      <li>Under <span>User Profiles</span> click <span>Settings</span></li>
      <li>Delete all the profiles named <span>Unknown Profile</span></li>
    </ol>
    <h4>Suggestion</h4>
    <p>If the computer is in a room shared by faculty/staff to print and copy documents, then you can delete many of the profiles that haven't logged into that computer for months.
    Having lots of user profiles can take up a ton of memory, so deleting those can free up a lot of space.</p>
  `,





  /* --------------- Remote Access --------------- */

  // Access from Home
  access_from_home: `
    <h2>Remote Access from Home</h2>
    <hr>
    <h3>Windows</h3>
    <ol>
      <li>Log into the <span>GlobalProtect VPN</span></li>
      <li>On the taskbar search <span>Remote Desktop Connection</span></li>
      <li>Open the <span>Remote Desktop Connection</span> app</li>
      <li>Enter the workstation name</li>
      <li>Click the <span>Connect</span> button</li>
    </ol>
    <hr>
    <h3>MacOS</h3>
    <ol>
      <li>Go to the <span>App Store</span></li>
      <li>Search for <span>Windows App</span></li>
      <li>Download/install the app</li>
      <li>Log into the <span>GlobalProtect VPN</span></li>
      <li>Open the <span>Windows app</span></li>
      <li>Click the <span>+</span> to add their workstation</li>
      <li>Click <span>PC</span></li>
      <li>Enter their workstation name under <span>PC Name</span></li>
      <li>Click <span>Save</span></li>
      <li>In the app, click on their workstation</li>
      <li>Enter their <span>username</span> and <span>password</span>
      <li>Click <span>Continue</span></li>
    </ol>
    <hr>
    <h4>Information</h4>
    <p>The user's workstation will need to have <span>Remote Desktop</span> enabled in its settings for this to work. If you're unsure how to do that, 
    you can find the steps by selecting <span>Remote Access</span> from the left menu on this page, and then clicking <span>Enable Remote 
    Access</span>.</p>
  `,

  // Enable Remote Access
  enable_remote_access: `
    <h2>How to Enable Remote Access</h2>
    <hr>
    <ol>
      <li>On the taskbar search <span>Remote Desktop Settings</span> and press <span>ENTER</span></li>
      <li>At the top, switch <span>Remote Desktop</span> to the <span>ON</span> position</li>
    </ol>
    <hr>
    <h4>Information</h4>
    <p>Users are unable to do this themselves unless they've been assigned as an administrator on their computer.</p>
  `,

  // Teams Remote Access
  teams_remote_access: `
    <h2>Remotely Accessing a Computer via Teams</h2>
    <hr>
    <ol>
      <li>Call the user on <span>Microsoft Teams</span> (make sure they answer the call on their computer)</li>
      <li>At the top-right corner, have the user click <span>Share</span></li>
    </ol>
    <hr>
    <h4>Information</h4>
    <p>If you need full control of the mouse and keyboard but are unable to remote into the computer using tools like Windows 
    Remote Assistance or VNC, it's best to escalate the issue to another technician who can assist in person.</p>
    <p>This is just an alternative if you're unable to remote into a user's computer and they simply want to show you what 
    they’re seeing.</p>
  `,






  /* --------------- SHORTCUTS --------------- */

  // C$ Share
  c_share: `
    <h2>C$ Share</h2>
    <hr>
    <h4 style="color: rgb(201, 103, 67);">How It Works:</h4>
    <p>The C$ share shortcut is a helpful tool for quickly transferring files between computers on our network. If a user needs a specific file, you can use 
    this shortcut to access their hard drive and simply drag, drop, and/or paste the file into the appropriate directory.</p>
    <ol>
      <li>On your taskbar search <span>\\\\</span><span style="color: #777";>user's ip address</span><span>\\c$</span> and press <span>ENTER</span></li>
      <li>From here, you can navigate to the directory you need access to</li>
    </ol><br>
  `,

  // General Keyboard Shortcuts
  general_shortcuts: `
    <h2>General Shortcuts</h2>
    <hr>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th><b>Shortcut</b></th>
          <th><b>Description</b></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Esc</b></td>
          <td>Cycle through windows in the order in which they were opened</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>F4</b></td>
          <td>Close the active window. If no windows are open, prompt to shutdown</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>F8</b></td>
          <td>Show your password on the sign-in screen</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Left arrow</b></td>
          <td>Go back</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Right arrow</b></td>
          <td>Go forward</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Page Up</b></td>
          <td>Move up one screen</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Page Down</b></td>
          <td>Move down one screen</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>PrtScn</b></td>
          <td>Capture a screenshot of the active window and copy it to the clipboard</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Spacebar</b></td>
          <td>Open the context menu for the active window</td>
        </tr>
        <tr>
          <td><b>Alt</b> <span class="span2";>+</span> <b>Tab</b></td>
          <td>Cycle through multiple windows</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>A</b></td>
          <td>Select all items in a window</td>
        </tr>
      </tbody>
    </table>
  `,

  // Text Editing Shortcuts
  text_editing_shortcuts: `
    <h2>Text Editing Shortcuts</h2>
    <hr>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th><b>Shortcut</b></th>
          <th><b>Description</b></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>A</b></td>
          <td>Select all text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>B</b></td>
          <td>Apply the bold format to the selected text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>I</b></td>
          <td>Apply the italic format to the selected text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>U</b></td>
          <td>Apply the underline format to the selected text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Backspace</b></td>
          <td>Delete words to the left of the cursor</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>C</b></td>
          <td>Copy the selected text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Del</b></td>
          <td>Delete words to the right of the cursor</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>End</b></td>
          <td>Move the cursor forward to the end of the document</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>F</b></td>
          <td>Find text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>H</b></td>
          <td>Find and replace text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Home</b></td>
          <td>Move the cursor backward to the beginning of the document</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Up arrow</b></td>
          <td>Move the cursor backward to the beginning of the previous paragraph</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Left arrow</b></td>
          <td>Move the cursor backward to the beginning of the previous word</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Right arrow</b></td>
          <td>Move the cursor backward to the beginning of the next word</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Down arrow</b></td>
          <td>Move the cursor forward to the beginning of the next paragraph</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Shift</b> <span class="span2";>+</span> <b>V</b></td>
          <td>Paste as plain text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Shift</b> <span class="span2";>+</span> <b>V</b> <span class="span2";>+</span> <b>Insert</b></td>
          <td>Paste the last item from the clipboard</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>X</b></td>
          <td>Cut and copy the selected text</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Z</b></td>
          <td>Undo what you typed last</td>
        </tr>
        <tr>
          <td><b>Ctrl</b> <span class="span2";>+</span> <b>Y</b></td>
          <td>Redo typing that was undone with Ctrl + Z</td>
        </tr>
      </tbody>
    </table>
  `,





    /* --------------- SOFTWARE --------------- */

  // RS2 (Access It!)
  software_library: `
    <h2>Software Library</h2>
    <hr>
    <p>Copy/paste the path below in the searchbar on your taskbar and press <span>ENTER</span></p>
    <p id="textToCopy3" style="color: rgb(201, 103, 67);">\\\\azedufs01\\Software_library\\Kace Scripts</p>
    <button id="copy_button3" onclick="copy_functions3()">Copy</button><br>
  `,





  /* --------------- SPAM --------------- */

  // Scan Suspicious Emails
  scan_attachments: `
    <h2>How to Scan Suspicious Attachments or Links in Emails</h2>
    <hr>
    <h3>Attachments</h3>
    <ol>
      <li>Download the attachment <span class="span2";>(</span><span>do not open it</span><span class="span2";>)</span></li>
      <li>Open a web browser and go to <span>https://www.virustotal.com/gui/home/upload</span></li>
      <li>Click <span>Choose File</span></li>
      <li>Select the attachment you just downloaded
      <li>Click <span>Confirm upload</li>
      <li>Check if the file is getting flagged for anything suspicious</li>
    </ol>
    <hr>
    <h3>Links</h3>
    <ol>
      <li>Copy the link <span class="span2";>(</span><span>do not open it</span><span class="span2";>)</span></li>
      <li>Open a web browser and go to <span>https://www.virustotal.com/gui/home/url</span></li>
      <li>Paste the link on the site</li>
      <li>Click <span>Search</span></li>
      <li>Check if the file is getting flagged for anything suspicious</li>
    </ol>
  `,





  /* --------------- UPDATES --------------- */

  // Cannot Run Updates On Computers
  disabled_updates: `
    <h2>What to Do if Updates Are Disabled</h2>
    <hr>
    <ol>
      <li>If needed, thaw the computer</li>
      <li>Restart the computer</li>
      <li>Check if you can run updates</li>
        <ol type="a">
          <li><span>If you can</span>:&ensp;&ensp; Run updates and then freeze the computer afterward</li>
          <li><span>If you can't</span>:&ensp; Proceed to step 4</li>
        </ol>  
      <li>On your taskbar search <span>services.msc</span></li>
      <li>Click <span>Run as administrator</span></li>
      <li>Scroll down and double-click <span>Update Orchestrator Service</span></li>
      <li>On the <span>Startup type</span> dropdown menu select <span>Automatic</span></li>
      <li>Click <span>Apply</span> and then click <span>OK</span></li>
      <li>Run updates</li>
      <li>Once updates have finished, repeat steps <span>4</span> <span class="span2";>-</span> <span>6</span></li>
      <li>On the <span>Startup type</span> dropdown menu select <span>Disabled</span></li>
      <li>Click <span>Apply</span> and then click <span>OK</span></li>
      <li>If needed, freeze the computer</li>
    </ol>
    <hr>
    <h4>Suggestion</h4>
    <p>If this is a user’s personal workstation that won’t update, you can skip steps <span>10</span> through <span>13</span>. 
    However, if the computer is located in a lecture hall or classroom, you’ll need to set the <span>Startup type</span> back 
    to <span>Disabled</span> after completing the updates.</p>
  `,

  // Force Update
  force_update: `
    <h2>Update Windows Even When It Says It's Up to Date</h2>
    <hr>
    <ol>
      <li>On your taskbar search for <span>Registry Editor</span></li>
      <li>Click <span>Run as administrator</span></li>
      <li>On the left menu, do the following:</li>
        <ol type="I">
          <li>Select <span>HKEY_LOCAL_MACHINE</span></li>
          <li>Select <span>SOFTWARE</span></li>
          <li>Select <span>Policies</span></li>
          <li>Select <span>Microsoft</span></li>
          <li>Select <span>Windows</span></li>
          <li>Select <span>Windows Update</span></li>
        </ol>
      <li>Right-click a blank area on the right</li>
      <li>Select <span>New</span> and click <span>String Value</span></li>
        <ol type="I">
            <li>Name: &ensp;<span>ProductVersion</span></li>
            <li>Value: &#20;&#20;<span>Windows 11</span>(<span class="span2">or whichever OS you're on</span>)</li>
        </ol>
      <li>Right-click again and select <span>New</span> and click <span>D-WORD (32-bit) Value</span></li>
        <ol type="I">
            <li>Name: &ensp;<span>TargetReleaseVersion</span></li>
            <li>Value: &#20;&#20;<span>1</span></li>
        </ol>
      <li>Right-click again and select <span>New</span> and click <span>String Value</span></li>
        <ol type="I">
            <li>Name: &ensp;<span>TargetReleaseVersionInfo</span></li>
            <li>Value: &#20;&#20;<span>24H2</span> (<span class="span2">or whichever version you need to push</span>)</li>
        </ol>
      <li>Restart the computer</li>
      <li>Run  updates</li>
    </ol>
  `,





  /* --------------- VPN --------------- */

  // Connect to VPN
  connect_to_vpn: `
    <h2>How to Connect to the GlobalProtect VPN</h2>
    <hr>
    <h3>Windows</h3>
    <ol>
      <li>Go to the right side of the taskbar</li>
      <li>Click the <span>^</span> icon <span class="span2">(</span><span>located near the time</span><span class="span2">)</span></li>
      <li>Look for an icon of a globe</li>
      <ol type="a">
        <li>If it is grey, they're not connected</li>
        <li>If it is black, they're already connected</li>
        <li>If there is no globe, the VPN is most likely not installed</li>
      </ol>
      <li>Double-click the globe <span class="span2">(</span><span>if it is grey</span><span class="span2">)</span></li>
      <li>Enter the necessary credentials and click <span>Connect</span></li>
      <ol type="a">
        <li><u>Portal</u>: <span>azvpn.midwestern.edu</span> or <span>ilvpn.midwestern.edu</span></li>
        <li><u>Username</u>: same one they use to log into CARS</li>
        <li><u>Password</u>: same one they use to log into CARS</li>
      </ol>
    </ol>
    <hr>
    <h3>MacOS</h3>
    <ol>
      <li>Look for an icon of a globe on top menu bar (<span>near date and time</span>)</li>
      <ol type="a">
        <li>If it is grey, they're not connected</li>
        <li>If it is black, they're already connected</li>
        <li>If there is no globe, the VPN is most likely not installed</li>
      </ol>
      <li>Double-click the globe <span class="span2">(</span><span>if it is grey</span><span class="span2">)</span></li>
      <li>Enter the necessary credentials and click <span>Connect</span></li>
      <ol type="a">
        <li><u>Portal</u>: <span>azvpn.midwestern.edu</span> or <span>ilvpn.midwestern.edu</span></li>
        <li><u>Username</u>: same one they use to log into CARS</li>
        <li><u>Password</u>: same one they use to log into CARS</li>
      </ol>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>It may be helpful to send a user <a href="./documents/vpn_instructions.pdf" download="vpn_instructions.pdf"><u>this</u></a> document for help
    connecting to the VPN.</p>
  `,

  // Install VPN
  install_vpn: `
    <h2>How to Install the GlobalProtect VPN</h2>
    <hr>
    <h3>Windows</h3>
    <ol>
      <li>Verify if their computer is 32-bit or 64-bit</li>
      <ol type="I">
        <li>Right-click the Windows Start icon</li>
        <li>Click <span>System</span></li>
        <li>Look for <span>System Type</span></li>
      </ol>
      <li>Open a web browser</li>
      <li>Enter the web address: </li>
      <ol type="a">
        <li><span>azvpn.midwestern.edu</span> (AZ)</li>
        <li><span>ilvpn.midwestern.edu</span> (IL)</li>
      </ol>
      <li>Download the <span>32-bit</span> or <span>64-bit</span> installer</li>
      <li>Once downloaded, double-click the installer</li>
    </ol>
    <hr>
    <h3>MacOS</h3>
    <ol>
      <li>Verify if their computer is 32-bit or 64-bit</li>
      <ol type="I">
        <li>Click the Apple logo in the top-left corner</li>
        <li>Click <span>About This Mac</span></li>
        <li>Click <span>More Info</span></li>
        <li>Scroll down and click <span>System Report</span></li>
        <li>Look for <span>Chip</span></li>
        <ol type="a">
          <li>If it says <span>Intel Core Duo</span> it is 32-bit</li>
          <li>If it says <span>Apple M1</span>, <span>Apple M2</span>, etc. it is 64-bit</li>
        </ol>
      </ol>
      <li>Open a web browser</li>
      <li>Enter the web address: </li>
      <ol type="a">
        <li><span>azvpn.midwestern.edu</span> (AZ)</li>
        <li><span>ilvpn.midwestern.edu</span> (IL)</li>
      </ol>
      <li>Download the <span>32-bit</span> or <span>64-bit</span> installer</li>
      <li>Once downloaded, double-click the installer</li>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>It may be helpful to send a user <a href="./documents/vpn_instructions.pdf" download="vpn_instructions.pdf"><u>this</u></a> document for help
    installing the VPN.</p>
  `,

  // Troubleshooting the VPN
  tsing_the_vpn: `
    <h2>What to Do if the VPN Won’t Connect</h2>
    <hr>
    <h3>Troubleshooting</h3>
    <ol>
      <li>Verify if they have an internet connection</li>
      <li>Verify which version of the VPN they installed <span class="span2";>(</span><span>64-bit</span> or <span>32-bit</span><span class="span2";>)</span></li>
      <li>Verify if their computer is <span>64-bit</span> or <span>32-bit</span></li>
      <ol type="a">
        <li><span>Windows</span></li>
          <ol type="I">
            <li>Right-click the Windows Start icon</li>
            <li>Click <span>System</span></li>
            <li>Look for <span>System Type</span></li>
          </ol>
        <li><span>MacOS</span></li>
          <ol type="I">
            <li>Click the Apple logo in the top-left corner</li>
            <li>Click <span>About This Mac</span></li>
            <li>Click <span>More Info</span></li>
            <li>Scroll down and click <span>System Report</span></li>
            <li>Look for <span>Chip</span></li>
            <ol type="a">
              <li>If it says <span>Intel Core Duo</span> it is 32-bit</li>
              <li>If it says <span>Apple M1</span>, <span>Apple M2</span>, etc. it is 64-bit</li>
            </ol>
          </ol>
        </ol>
        <li>Check if they're connected to a personal VPN</li>
        <li>Uninstall/reinstall the VPN <span class="span2";>(</span><span>unless you have already<span class="span2";>)</span></li>
        <li>If they're connected to a personal VPN disconnect from it</li>
        <li>Grab the VPN's logs and email them to <span>James Jacobson</span></li>
        <ol type="I">
            <li>Click on the GlobalProtect icon</li>
            <li>Click the ☰ in the upper-left corner</span></li>
            <li>Click <span>Settings</span></li>
            <li>Click the <span>Troubleshooting</span> tab</li>
            <li>Click on <span>Collect Logs</span></li>
          </ol>
      </ol>
    </ol>
    <hr>
    <h4>Important</h4>
    <p>For additional help collecting logs click <span><a href="./documents/gp_client_logs.docx" download="gp_client_logs.docx"><u>here</u></a></span>.</p>
  `,





  /* --------------- WI-FI --------------- */

  // Connect to Campus Wi-Fi
  campus_wifi: `
    <h2>How to Connect to Campus Wi-Fi</h2>
    <hr>
    <h3>iPhone</h3>
    <ol>
      <li>Go to <span>Settings</span></li>
      <li>Tap <span>Wi-Fi</span></li>
      <li>Tap <span>Campus</span></li>
      <li>Enter <span>username</span></li>
      <li>Enter <span>password</span></li>
      <li>If a certificate prompt appears, click <span>Trust</span></li>
    </ol>
    <hr>
    <h3>Android</h3>
    <ol>
      <li>Go to <span>Settings</span></li>
      <li>Navigate to <span>Network & Internet</span></li>
      <li>Select <span>Wi-Fi</span></li>
      <li>Select <span>Campus</span></li>
      <li>Choose <span>PEAP</span> from the <span>EAP</span> dropdown menu</li>
      <li>Choose <span>MSCHAPV2</span> from the <span>Phase 2 authentication</span> dropdown menu</li>
      <li>Choose <span>Do Not Validate</span> from the <span>CA Certificate</span> dropdown menu</li>
      <li>Enter <span>midwestern.edu</span> in the Domain field</li>
      <li>Enter <span>username</span> in the <span>Identity</span> field</li>
      <li>Leave <span>Anonymous identity</span> blank</li>
      <li>Enter <span>password</span> in the <span>Password</span> field</li>
      <li>Tap <span>Connect</span></li>
    </ol>
  `,

  // Connect to Guest Wi-Fi
  guest_wifi: `
    <h2>How to Connect to Guest Wi-Fi</h2>
    <hr>
    <h3>iPhone</h3>
    <ol>
      <li>Go to <span>Settings</span></li>
      <li>Tap <span>Wi-Fi</span></li>
      <li>Tap <span>Guest</span></li>
      <li>Enter <span>Pistachio</span> for the password</li>
    </ol>
    <hr>
    <h3>Android</h3>
    <ol>
      <li>Go to <span>Settings</span></li>
      <li>Navigate to <span>Network & Internet</span></li>
      <li>Select <span>Wi-Fi</span></li>
      <li>Select <span>Guest</span></li>
      <li>Enter <span>Pistachio</span> in the <span>Password</span> field</li>
      <li>Tap <span>Connect</span></li>
    </ol>
  `,
};
