#       UTF-8 Validation

In this project, we discuss about UTF-8 which is a variable-length character encoding standard used for electronic communication. Defined by the Unicode Standard.

## Task : pages_with_curl

* **0. UTF-8 Validation**

Write a method that determines if a given data set represents a valid UTF-8 encoding.

* Prototype: def validUTF8(data)
* Return: True if data is a valid UTF-8 encoding, else return False
* A character in UTF-8 can be 1 to 4 bytes long
* The data set can contain multiple characters
* The data will be represented by a list of integers
* Each integer represents 1 byte of data, therefore you only need to handle the 8 least significant bits of each integer