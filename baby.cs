

public class Baby : Human, IPoopFactory 
{
    public Baby(Human mom, Human dad)
    {
        ...
    }

    public Diaper diaper { get; set; }

    public void Eat(Food food)
    {
        ...
        Timer.start(callback: () => {
            Poop();
        });
        ...
    }

    public void Sleep()
    {
        ...
    }

    public void Poop()
    {
        diaper.Fill(...)
    }
}

public class Diaper : IDisposable 
{
    public void Fill(Waste waste) 
    {
        ...
    }
}

public interface IPoopFactory 
{
    void Poop();
}
