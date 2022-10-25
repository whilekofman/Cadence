class RemoveUserWeight < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :weight, :float
  end
end

