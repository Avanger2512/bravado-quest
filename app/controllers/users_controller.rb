class UsersController < LandingController
  def index
    userList = User.order('id DESC')
    render json: {status: 'SUCCESS', message: 'Loaded', data: userList},status: :ok
  end
end
