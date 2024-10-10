function Msg ({ message, name }) {
    return (
        <div>
          <img
            src={`https://readme-typing-svg.herokuapp.com/?font=Righteous&size=24&center=true&vCenter=true&width=500&height=70&duration=6000&lines=Welcome!!!+👋+my+name+is+${name};`}
            alt="Welcome message"
          />
        </div>
      );
};

export default Msg;