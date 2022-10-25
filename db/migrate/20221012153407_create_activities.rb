class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.references :athlete, null: false, references: :users, foreign_key: { to_table: :users }, index:true
      t.string :sport, null: false
      t.text :description, null: false
      t.text :type
      t.float :distance, null: false
      t.integer :hours, null: false 
      t.integer :minutes, null: false
      t.integer :seconds, null: false
      t.string :title, null: false
      t.integer :intensity, null: false
      t.float :hr
      t.text :pnotes
      t.integer :tags

      t.timestamps
    end
    add_index :activities, :sport
    add_index :activities, :distance
    add_index :activities, :intensity
  end

  # belongs_to :user, 
  #   class_name: :user
end
