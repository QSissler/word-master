class User < ActiveRecord::Base
  has_many :games, dependent: :destroy

  def getAllGames
    self.games
  end

  # def deleteAllGames
  #   self.games.destroy_all
  # end

end