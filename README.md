<h1>Amrita Neuron Simulator.</h1>

<p>Amrita Neuron simulator is a web project which can be used to simulate
different neuron models like Hodgkin-huxley, Adex, Izhikevich. The simulator
UI is build using ReactJs and the state of the UI is managed using MobX.</p>

#Developed by Joshy Alphonse and Shyam Diwakar
#Last updated 28-Oct-2017
#http://www.amrita.edu/compneuro
#E-mail: shyam@amrita.edu 

######################################################
#													#
#		#    #  ######  ########    ######			#
#		# #  #  #    #      #       #               #
#		#  # #  #    #      #       #####           #
#		#	##	#	 #		#		#				#			
#		#	 #  ###### 		#		######			#									
#													#							
######################################################################################
#																					 #
#<p> We have included a prebuilt simulator files in "/build" dir for quick use.</p>    #
#<p> Use a webserver to mount the "/build" to the localhost to access the simulator  #
# GUI<p>                                                                             #
#																					 #
######################################################################################




 <h4>Project Structure.</h4>

 <p style="font-weight: bold;">The Source for the simulator is contained in the 'src' directory.<p>
 <li>'src'                               -- Containes base simulator UI components</li>
 <li>'src\adex-components'               -- UI components for AdeX neuron model.</li>
 <li>'src\hodgkin-huxley-components'     -- UI components for Hodgkin Huxley model.</li>
 <li>'src\izhikevich-componets'          -- UI components for Izhikevich neuron model</li>
 <li>'src\store'                         -- parameters and variables which determine the state of the UI defined in MobX stores</li>






<h4>Requiremnts to run the Development versions:</h4>

<li>Nodejs</li>



<h4>To setup the Development version of the simulator:<h4>

<p style="color:red;">***NodeJS should be pre-installed on the system***<p>

<li>Download This Repo as .zip or Clone it.</li>
<li>Unzip the file.</li>
<li>Start a CLI in the project directory.</li>
<li>Run "npm install" to install the neccessary node packages.</li>
<li>Run "npm run start" to start the Development Server.</li>
<li>Go to 'http:\\localhost:3000'</li>
Happy Hacking.








