class Adduniquenesslikes < ActiveRecord::Migration[7.0]
  def change
    add_index :likes, [:liker_id, :likeable_id, :likeable_type], unique: true
  end
end
