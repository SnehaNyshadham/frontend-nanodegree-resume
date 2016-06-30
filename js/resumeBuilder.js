/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Sneha Nyshadham";
 var role = "Software Engineer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").append(formattedName);
 $("#header").append(formattedRole);

 var bio = {
 	"name": name,
 	"role": role,
 	"contact": "123-456-7890",
 	"picture": "https://www.google.com/search?q=cute+elephant+pic&safe=active&client=safari&rls=en&biw=1147&bih=782&tbm=isch&imgil=mapXX2HVcVffdM%253A%253B3rfVzol_WwXYAM%253Bhttp%25253A%25252F%25252Ftwistedsifter.com%25252F2012%25252F05%25252Fcutest-baby-elephants-ever%25252F&source=iu&pf=m&fir=mapXX2HVcVffdM%253A%252C3rfVzol_WwXYAM%252C_&usg=__HbF-jRo3iym_sNyieoPBTAo_Kok%3D",
 	"welcome": "Welcome",
 	"skills": ["awesomeness"]
 }