#!/bin/bash

####################################
# Name: Khoa Tran
# CSE 391 - Winter 2021
# Homework 7 - Task 1
####################################

function problem1 {
  # Type your answer to problem #1 below this line
  sed -i 's/Insert Catchy Slogan Here/Reinventing the World/' GenerateSite.java 
}

function problem2 {
  # Type your answer to problem #2 below this line
  sed -i 's/dirt/soil/gI' Products.java
}

function problem3 {
  # Type your answer to problem #3 below this line
  sed -s -i '2,6 s/public/private/' Product.java Employee.java 
}

function problem4 {
  # Type your answer to problem #4 below this line
  sed -i -e 's/ //g' -E -e 's/([0-9]{4})/\1 /g' cards.txt 
}

function problem5 {
  # Type your answer to problem #5 below this line
  sed 's/(^/**/$)//\//\/g' Products.java 
}

function problem6 {
  # Type your answer to problem #6 below this line
  sed -s -i 's/FAANG/24AndMe/gI' *.java
}

function problem7 {
  # Type your answer to problem #7 below this line
  echo "not yet implemented"
}

function problem8 {
  # Type your answer to problem #8 below this line
  sed -e 's/:\(.*\)</\1/' contributors.txt | uniq
}

function problem9 {
  # Type your answer to problem #9 below this line
  sed -e '^@\/@24AndMe.com' contributors.txt
}

