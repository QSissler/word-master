class WordsController < ApplicationController

    get "/words" do 
        words = Word.all
        words.to_json
    end
    
    get "/words/:id" do
        word = Word.find(params[:id])
        word.to_json
    end
    
    post "/words" do
        new_word = Word.create(word:params[:word], image_url:params[:image_url])
        status 201
        new_word.to_json
    end

    delete "/words/:id" do
        old_word = Word.find(params[:id])
        old_word.destroy
        status 204
    end

end