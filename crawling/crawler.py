# 웹크롤링 (Crawling) : 브라우저 드라이버를 이용하여 실제로 각 페이지를 이동하며, '동적'으로 데이터를 수집하는 방법

# 웹스크랩핑 (Scrapping) : 웹 페이지의 응답을 받아 데이터를 분석하여 필요한 데이터를 수집하는 방법

# 파이썬 스크랩핑 패키지 : beautifulsoup4
# 파이썬 크롤링 패키지 : selenium

# pip install beautifulsoup4 selenium

# 100번대 - 추가적으로 요청을 기다림
# 200번대 - 성공
# 300번대 - 리소스 위치가 바뀜
# 400번대 - 요청자(클라이언트) 오류 
# 500번대 - 응답자(서버) 오류
# >> http response code 확인

import requests # 주소 요청하기
from bs4 import BeautifulSoup

URL= 'https://naver.com/'

response = requests.get(URL)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    a_list = soup.find_all('a')
    print(a_list)
else:
    print(response.status_code)


from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# 크롬 브라우저 실행
driver = webdriver.Chrome()
time.sleep(2)

driver.get(URL)
time.sleep(2)
# 크롬 브라우저 실행 //


# 검색창에 '제네시스' 값 입력
search_input = driver.find_element(By.ID, 'query')
search_input.send_keys('제네시스')
time.sleep(1)
search_input.send_keys(Keys.ENTER)
time.sleep(2)
# 검색창에 '제네시스' 값 입력 //
 
# 뉴스 버튼 클릭
news_button = driver.find_element(By.CSS_SELECTOR, '#lnb > div.lnb_group > div > div.lnb_nav_area._nav_area_root > div > div.api_flicking_wrap._conveyer_root > div:nth-child(8) > a')
time.sleep(1)

ActionChains(driver).click(news_button).perform()
time.sleep(2)
# 뉴스 버튼 클릭 //


# 뉴스 제목 출력
news_title_elements = driver.find_elements(By.CLASS_NAME, 'news_tit')
time.sleep(1)

for news_title_element in news_title_elements:
   # title = news_title_element.text
    title = news_title_element.get_attribute('title')
    print(title)
time.sleep(1)
# 뉴스 제목 출력 //


# 홈페이지 뒤로가기
driver.back()
time.sleep(2)
# 홈페이지 뒤로가기 //


# 이미지 버튼 클릭
image_button = driver.find_element(By.CSS_SELECTOR, '#lnb > div.lnb_group > div > div.lnb_nav_area._nav_area_root > div > div.api_flicking_wrap._conveyer_root > div:nth-child(1) > a')
time.sleep(1)
ActionChains(driver).click(image_button).perform()
time.sleep(2)
# 이미지 버튼 클릭 //


# 이미지 주소 출력
image_elements = driver.find_elements(By.CLASS_NAME, '_fe_image_tab_content_thumbnail_image')
time.sleep(1)

image_list = []
for image_element in image_elements:
   # image_src = image_element.text
    image_src = image_element.get_attribute('src')
    image_list.append(image_src)
time.sleep(1)
# 이미지 주소 출력 //


# 파이썬으로 폴더 생성
import os

FOLDER_PATH = r'./images/'

if not os.path.isdir(FOLDER_PATH):
    os.mkdir(FOLDER_PATH)
# 파이썬으로 폴더 생성 //


# 파이썬으로 이미지 url 파일 다운로드
from urllib.request import urlretrieve

number = 1

for image_src in image_list:
    urlretrieve(image_src, FOLDER_PATH + f'{number}.png')
    number += 1
    time.sleep(.5)
# 파이썬으로 이미지 url 파일 다운로드 //