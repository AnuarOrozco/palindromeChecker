package com.uvm.microservices.palindromeapi.controller;

import com.uvm.microservices.palindromeapi.model.PalindromeRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PalindromeController {

    @GetMapping("/palindrome")
    public String checkPalindrome() {
        return "Please provide a string to check for palindrome";
    }

    @PostMapping("/palindrome")
    public String checkPalindrome(@RequestBody PalindromeRequest palindromeRequest) {
        String word = palindromeRequest.getWord();
        StringBuilder current = new StringBuilder();

        for (int i = word.length() - 1; i >= 0; i--) {
            current.append(word.charAt(i));
        }

        boolean isPalindrome = current.toString().equalsIgnoreCase(word);

        return "{\"isPalindrome\": " + isPalindrome + "}";
    }
}

