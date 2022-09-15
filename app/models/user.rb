class User < ActiveRecord::Base
  has_many :games, dependent: :destroy

  def getAllGames
    self.games
  end


end