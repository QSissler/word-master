class User < ActiveRecord::Base
  has_many :games

  def getAllGames
    self.games
  end

  def deleteAllGames
    self.games.destroy_all
  end

end