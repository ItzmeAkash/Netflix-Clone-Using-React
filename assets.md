netflix-logo= 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'


nav-avatar='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'§



import requests

url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQyZTg5MTA2Mjc4NTcwMDcxYTlkN2VhMmU0ODNkYiIsInN1YiI6IjY0NTRiMDcyZDhmNDRlMGRiMDcyNTAzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_m86kJ0RqxeDzfX8zQsRfD5oO2mQxuqZhTHyHWgo0o"
}

response = requests.get(url, headers=headers)

print(response.text)



 '',