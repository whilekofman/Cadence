class RemoveUserTraits < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :date_of_birth, :date
    remove_column :users, :sex, :string 
  
  end
end
