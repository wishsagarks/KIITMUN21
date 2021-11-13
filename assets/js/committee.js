function getCountries(committeId) {
  var committee = document.getElementById(committeId).value;
  var country1Id = committeId + "_country_1";
  var country2Id = committeId + "_country_2";
  var country3Id = committeId + "_country_3";


  var country1Element = document.getElementById(country1Id);
  var country2Element = document.getElementById(country2Id);
  var country3Element = document.getElementById(country3Id);

  var countryList = new Array(country1Element, country2Element, country3Element);

  var matrix = {
  'United Nations General Assembly- Disarmament and International Security Committee (DISEC)':['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Austria','Azerbaijan','Barbados','Belarus','Belize','Benin','Bolivia','Bosnia and Herzegovina','Brunei','Burkina Faso','Cabo Verde','Cameroon','Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Côte d Ivoire','Cuba','Cyprus','Czech Republic (Czechia)','Denmark','Djibouti','Dominica','DR Congo','Ecuador','El Salvador','Equatorial Guinea','Eritrea','Eswatini','Fiji','Finland','France','Gabon','Gambia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Holy See','India','Indonesia','Israel','Jamaica','Kazakhstan','Kenya','Kiribati','Laos','Latvia','Lebanon','Lesotho','Liberia','Liechtenstein','Lithuania','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Montenegro','Morocco','Mozambique','Namibia','Nauru','Niger','Nigeria','North Korea','North Macedonia','Oman','Pakistan','Palau','Paraguay','Portugal','Qatar','Russia','Rwanda','Saint Kitts & Nevis','Saint Lucia','Samoa','San Marino','Sao Tome & Principe','Saudi Arabia','Senegal','Sierra Leone','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','St. Vincent & Grenadines','State of Palestine','Sudan','Suriname','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','United States','Uzbekistan','Vanuatu','Yemen','Zambia'],
  'Intergovernmental Panel on Climate Change (IPCC)': ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Azerbaijan','Bahamas','Bahrain','Barbados','Belgium','Belize','Benin','Bhutan','Bolivia (Plurinational State of)','Bosnia and Herzegovina','Botswana','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cameroon','Central African Republic','Chad','China','Colombia','Comoros','Congo (Republic of the)','Cook Islands','Costa Rica','Côte d\'Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Democratic People\'s Republic of Korea','Democratic Republic of the Congo','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Eswatini (the Kingdom of)','Ethiopia','Fiji','France','Gabon','Gambia','Georgia','Ghana','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Iceland','Iran (Islamic Republic of)','Iraq','Ireland','Israel','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Lao People\'s Democratic Republic','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Micronesia (Federated States of)','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Nicaragua','Niger','Nigeria','Niue','North Macedonia','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Portugal','Qatar','Republic of Moldova','Romania','Russian Federation','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Sierra Leone','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Syrian Arab Republic','Tajikistan','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Kingdom of Great Britain and Northern Ireland','United Republic of Tanzania','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela (Bolivarian Republic of)','Vietnam','Yemen','Zambia','Zimbabwe'],
  'United Nations Commission on the Status of Women (UNCSW)':['Algeria','Bahrain','Bangladesh','Belarus','Brazil','Chile','China(O)','Comoros','Ecuador','Estonia','France(O)','Germany','Ghana','Iraq','Ireland','Japan','Kenya','Mongolia','Nicaragua','Niger','Peru','Republic of Korea','Russian Federation','Saudi Arabia','Senegal','Tunisia','United States','United Kingdom(O)'],
  'United Nations Childrens Fund (UNICEF)':['Afghanistan','Algeria','Andorra','Anguilla','Antigua and Barbuda','Armenia','Bahrain','Barbados','Belize','Bhutan','Bolivia, Plurinational State of','Bosnia and Herzegovina','Botswana','British Virgin Islands','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Central African Republic','Chad','China','Comoros','Cook Islands','Costa Rica','Côte d\'Ivoire','Croatia','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eswatini','Ethiopia','France','Gabon','Gambia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hong Kong SAR, China','Hungary','India','Iran (Islamic Republic of)','Iraq','Israel','Jamaica','Japan','Jordan','Democratic People\'s Republic of Korea (North Korea)','Kazakhstan','Kenya','Kiribati','Kosovo (under UNSC Resolution 1244)','Kuwait','Kyrgyzstan','Republic of Korea','Lao People\'s Democratic Republic','Lebanon','Lesotho','Liberia','Libya','Lithuania','Madagascar','Malawi','Marshall Islands','Mauritania','Mexico','Micronesia (Federated States of)','Moldova','Mongolia','Montenegro','Montserrat','Mozambique','Namibia','Nauru','New Zealand','Nicaragua','Niger','Nigeria','Niue','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Qatar','Romania','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','Sao Tome and Principe','Saudi Arabia','Serbia','Sierra Leone','Slovakia','Solomon Islands','Somalia','South Africa','South Sudan','Sudan','Suriname','Switzerland','Syrian Arab Republic','Tajikistan','Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey (National Committee)','Turkmenistan','Turks and Caicos Islands','Tuvalu','United Republic of Tanzania','Uganda','Ukraine','United Arab Emirates','United Kingdom of Great Britain and Northern Ireland','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Zambia','Zimbabwe'],
  'United Nations Security Council (UNSC)':['China','France','Germany (O)','India','Ireland','Kenya(President)','Mexico','Norway','Russia','Saint Vincent and the Grenadines','Tunisia','United Kingdom','United States','Vietnam'],
  'Joint Crisis Committee (JCC)': ['Sher Mohammad Abbas Stanekzai (Deputy Head of Taliban\'s Political Office in Doha)','Abdul Hakim Haqqani (Head of Taliban\'s Negotiating Team)','Anas Haqqani (Representative of the Haqqani faction in Taliban\'s Negotiating Team)','Abdullah Abdullah (Head of the Afghan Delegation)','Hamid Karzai (Former President of Afghanistan)','Fawzia Koofi (Women\'s Rights Activist and Member of the Afghan Delegation)','Khairullah Khairkhwa (Minister of Information and Culture of the Taliban’s Afghan government)','Maulavi Mohammad Yaqub Mujahid (Minister of Defense of the Taliban’s Afghan government)','UN SecretaryGeneral\'s Special Representative for Afghanistan','United States of America','United Kingdom','France','Germany','Uzbekistan','Turkmenistan','Tajikistan','Joseph Borrell, EU','China','Russian Federation','Pakistan','Iran','Turkey','UAE','Kyrgyzstan','Syria','Armenia'],
  'World Health Assembly (WHA)':['Algeria','Andorra','Angola','Antigua and Barbuda','Armenia','Australia','Austria','Bahamas','Belarus','Belgium','Benin','Bolivia','Bosnia and Herzegovina','Botswana','Brunei Darussalam','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Central African Republic','Chad','Chile','China','Comoros','Congo','Cook Islands','Costa Rica','Cyprus','Democratic People\'s Republic of Korea','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Fiji','France','Gabon','Gambia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','India','Indonesia','Iran(Islamic Republic of)','Italy','Japan','Kazakhstan','Kiribati','Kuwait','Lao People\'s Democratic Republic','Lesotho','Liberia','Libya','Lithuania','Luxembourg','Madagascar','Maldives','Mali','Malta','Mauritania','Mexico','Micronesia(Federated States of)','Monaco','Montenegro','Mozambique','Namibia','Nauru','New Zealand','Nicaragua','Niger','Niue','North Macedonia','Oman','Palau','Panama','Papua New Guinea','Paraguay','Republic of Moldova','Russian Federation','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Senegal','Seychelles','Sierra Leone','Slovakia','Slovenia','Solomon Islands','Somalia','Sudan','Suriname','Sweden','Syrian Arab Republic','Tajikistan','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Tuvalu','Uganda','Ukraine','United Republic of Tanzania','United States of America','Vanuatu','Venezuela (Bolivarian Republic of)','Zambia'],
  'World Bank':['Afghanistan','Algeria','Angola','Antigua and Barbuda','Armenia','Australia','Austria','Bangladesh','Barbados','Belarus','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei Darussalam','Burkina Faso','Burundi','Cabo Verde','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo, Democratic Republic of','Congo, Republic of','Costa Rica','Cote d\'Ivoire','Croatia','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','France','Gabon','Gambia','Georgia','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Indonesia','Iraq','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea','Kosovo','Kuwait','Kyrgyz Republic','Lao People\'s Democratic Republic','Latvia','Lebanon','Lesotho','Liberia','Libya','Lithuania','Madagascar','Malawi','Malaysia','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Nicaragua','Niger','Nigeria','North Macedonia','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russian Federation','Rwanda','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovak Republic','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','St. Kitts and Nevis','St. Lucia','St. Vincent and the Grenadines','Sudan','Suriname','Switzerland','Syrian Arab Republic','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'],
  'United nations Human Rights Council (UNHRC)': ['Bolivia (Plurinational State of)','Brazil','Burkina Faso','China','Cuba','France','Gabon','India','Italy','Libya','Marshall Islands','Russian Federation','Senegal','United Kingdom of Great Britain and Northern Ireland','Venezuela (Bolivarian Republic of)'],
  'United Nations Office on Drugs and Crime (UNODC)': ['Afghanistan','Angola','Antigua and Barbuda','Armenia','Australia','Azerbaijan','Bahamas','Bangladesh','Barbados','Belarus','Belize','Benin','Bolivia (Plurinational State of)','Bosnia and Herzegovina','Botswana','Brunei Darussalam','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Cook Islands','Costa Rica','Croatia','Cyprus','Czech Republic','Côte d\'Ivoire','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Ecuador','El Salvador','Equatorial Guinea','Eswatini','Ethiopia','European Union','Fiji','France','Gabon','Gambia','Georgia','Ghana','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Iran (Islamic Republic of)','Iraq','Ireland','Jamaica','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Lao People\'s Democratic Republic','Lebanon','Lesotho','Liberia','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia (Federated States of)','Mongolia','Montenegro','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','Nicaragua','Niger','Nigeria','Niue','North Macedonia','Oman','Pakistan','Palau','Panama','Paraguay','Poland','Republic of Korea','Republic of Moldova','Romania','Russian Federation','Rwanda','Saint Lucia','Samoa','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','State of Libya','State of Palestine','Sudan','Sweden','Syrian Arab Republic','Tajikistan','Thailand','Timor - Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkmenistan','Tuvalu','Uganda','Ukraine','United Kingdom of Great Britain and Northern Ireland','United Republic of Tanzania','United States of America','Uruguay','Uzbekistan','Vanuatu','Yemen','Zambia','Zimbabwe']   
  }



  for (var i = 0; i < 3; i++) {
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
