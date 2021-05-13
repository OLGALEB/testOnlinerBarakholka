@smoke
Feature: Onliner's "Барахолка" feature testing
    #Description: Check user redirection to "Барахолка" from Onliner.by homepage and also check search

    Scenario: Click on "Барахолка" hyperlink which located inside the onliner.by header
        Given Homepage onliner.by was opened
        When Click on "Барахолка" hyperlink 
        Then User was redirected to specific "Барахолка" page baraholka.onliner.by


    Scenario: Search "Лопата" via search bar which located on "Барахолка" page
        Given "Барахолка" page was opened
        When "Лопата" was entered in the search bar
        Then Click "Search" button
        Then Headers  "Все", "Продам", "Куплю", "Обмен", "Услуга", "Аренда", "Закрыто" were presented for user