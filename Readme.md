# **Project Road Map for September**

==SGDMS: Smart Garbge Disposal Management System==

\#SCOPE OF WORK (Features and functionalities to be added)


1. Dashboard development
2. ESP32 & Ultrasonic sensor testing
3. Hardware readings integration with backend API
4. Mobile app completion
5. Hosting and testing
6. Bug fixes

# Timeline

==Week 1 (Sep 2 - 6 )==

**Task 1** : Integrate backend API with the dashboard to display dynamic user/driver information in realtime.

Task 2 : Create and display charts of all drivers and bins on the dashboard with realtime updates via the backend API.

Task 3 : Create a log in function and page for super admin (dashboard).

Task 4 : Minor UI updates and bug fixes.

==Week 2 ( sep 9 - 13)==

Task 1 : Integrate MSG91 (whats app API) for sending driver notifications on bin full from the Admin dashboard.

Task 2 : Work on Ultrasonic sensors and esp32 micro-controllers to ensure accurate and synchronized readings across multiple systems (Dasboard & Driver’s app).

Task 3 : Hosting the Dashboard system on the cloud and linking an appropraite domain.

Task 4: Bug fixes.

==Week 3 (Sep 16 - 20)==

Task 1 : Optimise backendend API routes to handle multiple sensor readings with better efficacy.

Task 2 : Create and append project specific email | phone number | whats app channels for customer support.

Task 3 : Migrate from Wifi to GPRS connection for esp32 micorcontrollers (requires external microcontroller with a 2G sim for GPRS connection).

Task 4: Bug fixes.


==Week 4 (Sep 23 - 28)==

Task 1: Migrate backend API hosting from Render to AWS.

Task 2: Add SSL certificate of the backend API  to Arduino code to facilitate data transfer over https.

Task 3: In house testing with the appropriate number of bins and users to simulate a real world implementation.

Task 4: Minor big fixes.