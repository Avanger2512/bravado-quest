class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :title
      t.string :city
      t.string :address
      t.string :avatar

      t.timestamps
    end
  end
end
