class ChangeActivityType < ActiveRecord::Migration[7.0]
  def change
    rename_column :activities, :type, :purpose

  end
end
