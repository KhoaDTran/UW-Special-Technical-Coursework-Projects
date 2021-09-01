#!/bin/bash

####################################
# Name: Khoa Tran
# CSE 391 - Autumn 2020 
# Homework 3 - Task 2
####################################

function problem1 {
  # Type your answer to problem #1 below this line
  cut -d "," -f 1 intro_survey_21sp.csv
}

function problem2 {
  # Type your answer to problem #2 below this line
  cat intro_survey_21sp.csv >> combined_results.csv | tail -n +2 intro_survey_21wi.csv >> combined_results.csv
}

function problem3 {
  # Type your answer to problem #3 below this line
  echo "7"
}

function problem4 {
  # Type your answer to problem #4 below this line
   echo " 8 Twix 8 Skittles 6 Sour Patch Kids" 
}

function problem5 {
  # Type your answer to problem #5 below this line
  # How many unique candies are in the "What's your favorite candy" column of the combined classes
  cut -d "," -f 1 combined_results.csv >> test.csv | sort -u test.csv | wc -l
}
