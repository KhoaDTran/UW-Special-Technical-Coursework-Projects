#!/bin/bash

if [ "$#" -ne 1 ]
then
    echo "Usage :./autograder.sh MAXPOINTS"
    exit 1
else
    maxPoint=$1
    echo "Autograding CSE 391 Homework"
    echo "Grading with a max score of $1"
    echo
    for files in students/*
    do
	file=${files:9:${#files}}
	DIR="students/$file/"
	if [ -d "$DIR" ]
	then
	    echo "Processing $file ..."
	    if [ -f "students/$file/task1.sh" ]
	    then
	      	bash ./students/$file/task1.sh > output.txt
	       	count=`diff -b -w output.txt expected.txt | grep [\<\>] | wc -l`
	       	Score=$((maxPoint - ( 5 * count)))
	       	if [ $Score -eq $1 ]
       		then
		    	echo "$file has correct output"
	       	    echo "$file has earned a score of $1 / $1"
	       	    echo
	       	elif [ $Score -le 0 ]
       		then
		    	echo "$file has incorrect output ($count lines do not match)"
	       	    echo "$file has earned a score of 0 / $1"
	       	    echo
	       	else
		    	echo "$file has incorrect output ($count lines do not match)"
		    	echo "$file has earned a score of $Score / $1"
		    	echo
			fi
       	else
			echo "$file did not turn in the assignment"
			echo "$file has earned a score of 0 / $1"
			echo
	    fi
	else
      	    exit 0
	fi
    done
fi
exit 0