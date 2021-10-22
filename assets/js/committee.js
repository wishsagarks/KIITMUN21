function getCountries(committeId) {
  var committee = document.getElementById(committeId).value;
  var country1Id = committeId + "_country_1";
  var country2Id = committeId + "_country_2";
  var country3Id = committeId + "_country_3";
  var country4Id = committeId + "_country_4";
  var country5Id = committeId + "_country_5";

  var country1Element = document.getElementById(country1Id);
  var country2Element = document.getElementById(country2Id);
  var country3Element = document.getElementById(country3Id);
  var country4Element = document.getElementById(country4Id);
  var country5Element = document.getElementById(country5Id);

  var countryList = new Array(country1Element, country2Element, country3Element, country4Element, country5Element);

  var country1 = country1Element.value;
  var country2 = country2Element.value;
  var country3 = country3Element.value;
  var country4 = country4Element.value;
  var country5 = country5Element.value;

  var xhttp = new XMLHttpRequest();

  var matrix = {

    'United Nations General Assembly- Disarmament and International Security Committee (DISEC)':[ 
      'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Benin','Bhutan','Bolivia (Plurinational State of)','Bosnia and Herzegovina','Botswana','Brazil','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Côte DI voire','Croatia','Cuba','Cyprus','Czech Republic','Democratic People Republic of Korea','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gambia (Republic of The)','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran (Islamic Republic of)','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','KENYA','Kiribati','Kuwait','Kyrgyzstan','Lao People’s Democratic Republic','Latvia','Lebanon','Liberia','Libya','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia (Federated States of)','Monaco','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Republic of Korea','Republic of Moldova','Romania','Russian Federation','Rwanda','Saint Lucia','Saint Vincent and the Grenadines','Samoa','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syrian Arab Republic','Tajikistan','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom of Great Britain and Northern Ireland','United Republic of Tanzania','United States of America','Uruguay','Uzbekistan','Vanuatu','"Venezuela, Bolivarian Republic of"','Viet Nam','Yemen','Zambia','Zimbabwe'],

	'United Nations Framework convention on climate change (UNFCCC)': [
    'Australia','Austria','Belarus','Belgium','Bulgaria','Canada','Croatia','Cyprus','Czechia','Denmark','Estonia','Finland','France','Germany','Greece','Hungary','Iceland','Ireland','Italy','Japan','Latvia','Liechtenstein','Lithuania','Luxembourg','Malta','Monaco','Netherlands','New Zealand','Norway','Poland','Portugal','Romania','Russian Federation','Slovakia','Slovenia','Spain','Sweden','Switzerland','Turkey','Ukraine','United Kingdom of Great Britain and Northern Ireland','United States of America','','Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belize','Benin','Bhutan','Bolivia (Plurinational State of)','Bosnia and Herzegovina','Botswana','Brazil','Brunei Darussalam','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Cook Islands','Costa Rica','Côte dIvoire','Cuba','Democratic People Republic of Korea','Democratic Republic of the Congo','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Eswatini','Ethiopia','Fiji','Gabon','Gambia','Georgia','Ghana','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','India','Indonesia','Iran (Islamic Republic of)','Iraq','Israel','Jamaica','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Lao People Democratic Republic','Lebanon','Lesotho','Liberia','Libya','Madagascar','Malawi','Malaysia','Maldives','Mali','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia (Federated States of)','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Nicaragua','Niger','Nigeria','Niue','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Qatar','Republic of Korea','Republic of Moldova','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Solomon Islands','Somalia','South Africa','South Sudan','Sri Lanka','State of Palestine','Sudan','Suriname','Syrian Arab Republic','Tajikistan','Thailand','The Republic of North Macedonia','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkmenistan','Tuvalu','Uganda','United Arab Emirates','United Republic of Tanzania','Uruguay','Uzbekistan','Vanuatu','Venezuela (Bolivarian Republic of)','Vietnam','Yemen','Zambia','Zimbabwe'],

	'United Nations Entity for Gender Equality and the Empowerment of Women (UN WOMEN)': [
    'Angola','Algeria','Argentina','Armenia','Australia','Bahrain','Bangladesh','Belarus','Belgium','Brazil','Burundi','Canada','Chile','China','Colombia','Comoros','Congo','Denmark','Cuba','Ecuador','Eritrea','Estonia','Eswatini','Finland','Georgia','Germany','Ghana','Guatemala','Haiti','Hungary','India','Iraq','Ireland','Israel','Iran','Japan','Kazakhstan','Kenya','Kuwait','Lebanon','Lithuania','Madagascar','Mexico','Mongolia','Morocco','Namibia','Nepal','New Zealand','Nicaragua','Niger','Nigeria','Norway','Peru','Qatar','Republic of Korea','Russian Federation','Saudi Arabia','Senegal','Sierra Leone','South Africa','Sweden','Switzerland','Togo','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','United Kingdom','United States' ],

  'United Nations General Assembly- Special political and decolonization committee (SPECPOL)': ['Bangladesh','Brazil','Canada (C)','China','Costa Rica','Colombia (VC)','Egypt','Ethiopia','France','Germany','Guatemala','India','Iran (Islamic Republic of Iran)','Ireland','Japan (VC)','Kenya','Mali','Mexico','Nepal','Niger','Norway','Pakistan','Peru','Republic of Korea','Russian Federation','Rwanda','Slovakia','Sweden','United Kingdom','United States'],
  
	'United Nations Security Council (UNSC)': [
    'China','France','Russian Federation','The United kingdom','The United States','Ireland','Norway','Estonia','Mexico ','India','Niger','Saint Vincent and the Grenadines','Tunisia','Viet Nam','kenya'],

	'United Nations Peacebuilding Commission (UNPBC)': [
    'Bangladesh','Brazil','Canada (C)','China','Costa Rica','Colombia (VC)','Egypt','Ethiopia','France','Germany','Guatemala','India','Iran (Islamic Republic of Iran)','Ireland','Japan (VC)','Kenya','Mali','Mexico','Nepal','Niger','Norway','Pakistan','Peru','Republic of Korea','Russian Federation','Rwanda','Slovakia','Sweden','United Kingdom','United States'],

	'Historical Crisis Committee (HCC)': [
    'Portfolio','USA-General of the Army-George Marshal','USA-General-Mark W. Clark','USA-Chief of Air Force-Henry Arnold','USA-Deputy Commander of Army Air Force-Ira C. Eaker','USA-Fleet Admiral-Ernest King','USA-Admiral-Frank J. Fletcher','USA-Representative of OSS-William Donovan','USA-Representative of OSS-Stanley Lovell','USSR-Marshal of Soviet Union-Georgy Zhukov','USSR-General of Army-Nikolai Vatutin','USSR-Chief Marshal of Aviation of Soviet Union-Alexander Novikov','USSR-Marshal of Aviation of Soviet Union-Sergei Khudyakov','USSR-Admiral of the Fleet of Soviet Union-Ivan Isakov','USSR-Admiral-Ivan Yumashev','USSR-Representative of GRU-Ivan Ilyichev','USSR-Representative of GRU-Fyodor Kuznetsov','Great Britain-Field Marshal-Alan Brooke','Great Britain-General-Claude Auchinleck','Great Britain-Marshal of Royal Air Force-Charles Portal','Great Britain-Air Chief Marshal-Arthur Harris','Great Britain-Admiral of the Fleet-Andrew Cunningham','Great Britain-Admiral of Fleet-Louis Mountbatten','Great Britain-Representative of SIS-Sir Stewart Menzies','Great Britain-Representative of SIS-Wilfred Dunderdale','France-Général de Brigade-Charles de Gaulle','France-Général dArmée-Maurice Gamelin','France-Admiral of Fleet-François Darlan','France-Representative of Free French Force Intelligence Wing-Jean L. Tassiny','China-Leader-Mao Zedong','China-Generalissimo-Chiang Kai-shek','China-General-Yan Kishan','China-Marshal-Zhu De','China-Fleet Admiral-Chen Shaokuan','China-Admiral-Chen Ce','Canada-General-Harry Crerar','Canada-Lieutenant General-Guy Simonds','Canada-Air Chief Marshal-Llyod S. Breadner','Australia-Lieutenant General-Vernon Sturdee','Australia-Air Chief Marshal-Charles Burnett','Australia-Vice Admiral-John G. Crace'],

	'World health assembly (WHA)': [
    'Afganistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Costa Rica','Côte d’Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Democratic Peoples Republic of Korea','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Lao Peoples Democratic Republic','Latvia','Lebanon','Lesotho','Liberia','Libya','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Niue','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Republic of Korea','Republic of Moldova','Romania','Russian Federation','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Suriname','Sweden','Switzerland','Syrian Arab Republic','Tajikistan','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom of Great Britain and Northern Ireland','United Republic of Tanzania','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Viet Nam','Yemen','Zambia','Zimbabwe'],

	'United nations Human Rights Council (UNHRC)': [
    'Afghanistan(E)','Angola(E)','Argentina','Armenia','Australia(E)','Austria','Bahamas','Bahrain','Bangladesh','Brazil','Bulgaria','Burkina Faso','Belgium','Cameroon','Chile(E)','Czechia','Democratic Republic of the Congo(E)','Denmark','Eritrea','Fiji','Germany','India','Indonesia','Italy','Japan','Libya','Marshall Islands','Mauritania','Mexico(E)','Namibia','Nepal(E)','Netherlands','Nigeria(E)','Pakistan(E)','Peru(E)','Philippines','Poland','Qatar(E)','Republic of Korea','Senegal(E)','Slovakia(E)','Somalia','Spain(E)','Sudan','Togo','Ukraine(E)','Uruguay','Venezuela (Bolivarian Republic of Venezuela)','China','United Kingdom','USA','Russian Federation'],

	'United nations Economic and social council (ECOSOC)': [
    'Angola','Armenia','Australia','Bangladesh','Belarus','Benin','Botswana ','Brazil','Canada','China','Colombia','Congo','Ecuador','Egypt','El Salvador','Ethiopia','Finland','France','Gabon','Germany','Ghana','India','Iran ','Ireland','Jamaica','Japan','Kenya','Latvia','Luxembourg','Malawi','Mali','Malta','Mexico','Montenegro','Morocco','Netherlands','Nicaragua','Norway','Pakistan ','Panama','Paraguay','Philippines','Republic of Korea','Russian Federation','Saudi Arabia','Spain','Sudan','Switzerland ','Thailand','Togo','Turkmenistan','Ukraine ','UNITED KINGDOM','United States of America','Uruguay']
    
  }


  for (var i = 0; i < 5; i++) {
    var temp = countryList[i].firstElementChild;
    temp.selected = true;
    countryList[i].innerHTML = "";
    countryList[i].appendChild(temp);

    for (var j = 0; j < matrix[committee].length; j++) {
      var option = document.createElement("option");
      option.text = matrix[committee][j];
      countryList[i].appendChild(option);
    }
  }

}